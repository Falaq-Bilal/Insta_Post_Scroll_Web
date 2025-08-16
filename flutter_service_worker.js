'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c1fdfb7f93ea7ad4ff952a806239ffd7",
".git/config": "5fcbc8fc469a5a0de886ff1ac3c7cc7d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "576fdd8da1bd6a9325419313b47b33b8",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "38381876fd96dbbb857630f55041d340",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "13a4beae544da62859688dc9dc8fd98c",
".git/logs/refs/heads/master": "13a4beae544da62859688dc9dc8fd98c",
".git/logs/refs/remotes/origin/HEAD": "b850c2396a10b217688e4485294e3151",
".git/logs/refs/remotes/origin/master": "9a82cfb0bf12c853c4ecac6801c1596f",
".git/objects/0a/cdca51513ef6a4fcda4c57d0cb5cc3d49a1619": "a39b5b4ad71f677d4dc37f620b141acc",
".git/objects/0b/a82305f82b2242b40f3317e18e8a0165397ee8": "185084a57c8865390a9b22fa5bfbea5d",
".git/objects/0c/35d326b656faf52af76f0f002f5e36fff4d81a": "5792276e284341f1c79df2decf0e5ee3",
".git/objects/12/96eb0ec48545f526e32cf3cdcce4ffeec570ed": "fb4de393474e73827db5d53b0c3fa6cd",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/27/e960dc2b9f798a0ee87f7d7ccc041435fee5a7": "fa00227b37e3e30c8a8857a692b441af",
".git/objects/30/aaa8a0efe9d27cba503f23f8cf721e9efe2cb9": "30238febb1d226d912cf32bd0b177ca7",
".git/objects/3a/1e1b78e9a6fbb7269a9e8db9809671eefbf8f1": "7e242d2566fbdba49fdcc27ecc8ba8df",
".git/objects/44/c51fa368f9b59a1a353041af0161419f151fa8": "6147f76c26d3fe4756b5006410730804",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/5f/0c32b776f99f89603c1af12a4487646641453c": "9d6b7968410bf3b8fe639670f81da6a4",
".git/objects/6a/c0e0f928316f2cddcc5fe8e02b5268630a0c24": "cfdf3392a525da233ce108d6eae5b576",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/cde5e5e005747ba227237731472d665a905b92": "02fd97f66a4f50cde7a128eba6f2052a",
".git/objects/6e/e251abdf4ec22b6eccb6b78c22e53a04ca5e40": "03cdff67204cef3980ad0e150cc62833",
".git/objects/6f/eb7c182556d34721df66230a71aeceb3953494": "32557c17c8ff13fbd80a9137f4a961e2",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/7b/ae0d9ea74725c2e63a8d44934318e5d4b17ecb": "016cac07610446fdab509834a1accbb1",
".git/objects/87/598af826f5d98eae3fcef01db088a5a8d2b23e": "5c14a2de3fc7fa5576da78f1335ca9e8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8f/83c743919f18ac97a4be80b02b209d68a7a9c9": "2e4376028cccae6fadf4f80a53477090",
".git/objects/98/f76c1090f77e8efc048620cffd21219798ba4a": "202eacf2cd167da1eee83e09ff9dbf5b",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9c/628a028abf2f103f23bcaced1c450d5d1216f0": "63e244124eecce987475bfe6257d5283",
".git/objects/a0/04e263c41a320c1833d31ac2343413e92732d3": "836fad258fcc473070e19ba086165ba9",
".git/objects/a1/99104059cdf1c739a2b8289122c796fa04838f": "2ca4a5b1d7f940acdee9fd04b7600274",
".git/objects/ab/7cd3ab4830659775c48b973f30638d0d4db6e8": "f84948a2707d80f59fa2d16dd0d03a59",
".git/objects/af/5e4a10f9e6e6fdba7fbe9742ca7a1b1686ea92": "ff368e639675981fd3ba6852599868d5",
".git/objects/b2/df72f9863695f38dd41b1d8373f30ca739ad78": "56a25bf74c1d7d43327e27baa6325f1e",
".git/objects/b3/b282ed2a3cade86384518bc7938de9394daa5e": "ba95cb0144c7cce117b30e728c2b3b7f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/be/038e1662cea6081bdab57e70c9efef142fbdd3": "b4e603a8b0218ba9e16505ea37037587",
".git/objects/bf/3c687cf33a3279b02fe259abca4386ce0792a6": "84cea289d582cf1342bf559b3b5e5541",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c8/8a86c92fef75cf11a08ac78aa5e4256048179b": "9671f90f8ef36f3cd58d226670acf35a",
".git/objects/cb/035f512fed5d12fa33eaaf3c8b46b3f57e166e": "1e1f9fa9466abbbba071209a59f57441",
".git/objects/ce/2993ef3e53050a5577715dd4aa90b0201930ee": "1e41d6583552fbc1144c26da73067ce6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/f957b0453a2d0f6821ec0d661076429f3ecc97": "73b290b72b4790a359a5dd4271298bf7",
".git/objects/db/4e07e9e4bdb69a77af6d3fe791497aa1c13e07": "81f55b9ceccf2821cd667f89114bd282",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/df/7243dbe370c9ad952613101c7693b6a650249f": "98e8f5ef30b36d65a91a5fbd05ce16e4",
".git/objects/df/b50b58bd7eb07433ebaa8ea60f2bf6e5c0da76": "246455ef9c5a467a775eafcd80caf770",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e4/12f37a05ce283e47fe7745ea911777ab17be65": "d9eb8988af8efa2b659ee311bba9ec35",
".git/objects/e6/15481a1134f6114f456d814e1794c23065c408": "f37197afa2a8f9fa81cc2aad96475310",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/a0a662bdecbc00f662aba0d1b1173243b35dab": "ca91082dcbe60d1abe29efa638992ede",
".git/objects/f0/5bf345203eb36a7f4fa63e37d46ec01b59698b": "e4ad38b21d1b8d599243383e257f49a7",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/fc2675119d6894dbcce21e6f0822a5b2c31330": "5e198732782d27e9ddf9fb39f27ee60b",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/a56510a9d05703ffdfa58723a20cf16f5de5c9": "62f2579ef7d236702e8502cd9283caed",
".git/ORIG_HEAD": "abd9aeba692f05f0d50762d76deaff32",
".git/refs/heads/master": "54b529a84dd67f15d07847f9f17eb401",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "54b529a84dd67f15d07847f9f17eb401",
".github/workflows/static.yml": "460c55729583fa21ec248ef3b182e75a",
"assets/AssetManifest.bin": "81c8c9a54c05c0e0fe437bd4a2842076",
"assets/AssetManifest.bin.json": "3e6ab46dcc88cf9b51a3fa828c80bb0d",
"assets/AssetManifest.json": "2fa35ae7c2fbb25fda5f2499eb760ba0",
"assets/assets/Dp.jpg": "e44e9cbbe2f12dbfb9dac7c2d272669d",
"assets/assets/Jannat.jpg": "501394bc9089c58ea2d4ba89e7d3ebf0",
"assets/assets/pink_pic.jpg": "f17f9ac00dbcf82afb160ba0509d86ff",
"assets/assets/rabbi%2520inni%2520lima.jpg": "d368659a7f8eba67366abc0b65e1f0da",
"assets/assets/Saved_icon.jpg": "fd37b5e7dce99383e5f8df7ea7a5c7f7",
"assets/assets/Sent_icon.jpg": "31faad6f5c06c9bfacafad8dfe09f58e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "965fe44803d8b751e3b177a64a34a043",
"assets/NOTICES": "7f673730900047942f728fe9f06d3f75",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "4bad32d62df09fe3695a84a281b07a29",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e1d2ef0fceb848c710be160ea60bd3a0",
"/": "e1d2ef0fceb848c710be160ea60bd3a0",
"main.dart.js": "3b5ad56d56f8c2f7eff75a94a962972a",
"manifest.json": "d473506c94ae5e9219724c9386ac7d33",
"version.json": "6517cf38437518e71a43af6ab9c952d5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
