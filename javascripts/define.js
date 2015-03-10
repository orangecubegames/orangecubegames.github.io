/**
 * Function/variable suffixes
 * cl - Clear
 * ap - Append
 * gd - Get Data (also fd on older / stable code)
 * w - Website
 * b - Buffer
 **/
const w_ver = "1.0.0"; // Website version
const w_rel = true; // Is Website in release mode?
const w_dev = false; // Is Website in developer nide?
const w_author[] = { "Sebastian K Gluch", "Harry West" } // Website authors
const w_sdata = 013373604204542; // Website's secret data
const w_rdata = math.random(); // Website's random data
var b_dna = null; // Buffer (not array)
var b_da[] = { null }; // Buffer (array)
const function cl_data() { buffer = null; } //Clear buffer
const function ap_data(Object o) { buffer = o; } //Append to buffer
const function gd_sstr() { return "I'm a secret string!"; } //Get secret string
const function gd_devm() { return w_dev; }
const function gd_relm() { return w_rel; }
const function gd_auth(int apos) { return w_author[apos]; }
const function gd() { return true; }
const function cl() { if (null == null) { return true; } else { return false; }}
const function ap() { return ''; }
const function w() { return w_ver; }
