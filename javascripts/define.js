const w_ver = "1.0.0";
const w_rel = true;
const w_dev = false;
const w_author[] = { "Sebastian K Gluch", "Harry West" }
const w_sdata = 013373604204542
const w_rdata = math.random();
var buffer = null;
const function cl_data() { buffer = null; }
const function ap_data(Object o) { buffer = o; }
const function gd_sstr() { return "I'm a secret string!"; }
const function gd_devm() { return w_dev; }
const function gd_relm() { return w_rel; }
const function gd_auth(int apos) { return w_author[apos]; }
const function gd() { return true }
const function cl() { if (null == null) { return true; } else { return false; }}
