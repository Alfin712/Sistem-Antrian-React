function AuLoginV(values) {
    let error = {}
    const email_pattern = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    if (values.email === "") {
        error.email = "Email harus di isi"
    }
    else if (!email_pattern.test(values.email)) {
        error.email = "Email tidak sesuai"
    } else {
        error.email = ""
    }

    if (!values.password) {
        error.password = "Password harus diisi";
    } else if (values.password.length < 6) {
        error.password = "Password harus memiliki minimal 6 karakter";
    } else {
        error.password = "";
    }

    return error;
}
export default AuLoginV;