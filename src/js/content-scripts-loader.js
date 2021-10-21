import T           from '../js/lib/tool.js';
import ExtApi      from '../js/lib/ext-api.js';
import ExtMsg      from '../js/lib/ext-msg.js';

// scripts that will execute on all frames
const CONTENT_SCRIPTS_A = [
  "/vendor/js/browser-polyfill.js",
  "/vendor/js/i18n.js",
  "/_locales/en/common.js",
  "/_locales/zh_CN/common.js",
  "/js/content-frame.js"
];

// scripts thet will only execute on the top frame.
const CONTENT_SCRIPTS_B = [
  "/js/content.js"
]

async function load(tabId) {
  const frames = await getFramesThatNotLoadContentScriptsYet(tabId);
  console.log("frame length", frames.length);
  if (frames.length == 0) { return; }

  const tasks = [];
  for (const {frameId} of frames) {
    tasks.push(new Promise(async (resolve, reject) => {
      try {
        for (const file of CONTENT_SCRIPTS_A) {
          await ExtApi.executeContentScript(tabId, {
            frameId, file, runAt: 'document_idle'});
        }
        if (frameId == 0) {
          // top frame
          for (const file of CONTENT_SCRIPTS_B) {
            await ExtApi.executeContentScript(tabId, {
              frameId, file, runAt: 'document_idle'});
          }
        }
        // all content scripts has loaded successfully.
        resolve();
      } catch(e) {
        // something wrong happened when loading content scripts
        reject(e.message);
      }
    }));
  }

  return await Promise.all(tasks);
}

async function getFramesThatNotLoadContentScriptsYet(tabId) {
  console.log(tabId);
  const frames = await ExtApi.getAllFrames(tabId);
  const targetFrames = [];
  for (const frame of frames) {
    if (T.isHttpUrl(frame.url)) {
      try {
        const resp = await ExtMsg.pingContentScript(tabId, frame.frameId);
        if (resp == 'pong') {
          // the target frame can respond to ping,
          // that means it's content scripts have laoded.
        } else {
          // In some old version of firefox (such as: 60.8.0esr)
          // when you send the same message to content script the second time,
          // it'll resolve undefined and the actual message won't be sent.
          //
          throw new Error("Could not establish connection. Receiving end does not exist.");
        }
      } catch (e) {
        // console.error(e);
        // console.trace();
        // this frame hasn't load content scripts yet,
        // store it in targets.
        targetFrames.push(frame);
      }
    }
  }
  return targetFrames;
}

export default {load};
