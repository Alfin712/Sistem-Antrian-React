function AuRegisteV(values) {
    let errors = {}
    const emailPattern = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    if (!values.nama_pelanggan) {
        errors.nama_pelanggan = "Nama harus diisi";
    } else {
        errors.nama_pelanggan = "";
    }

    if (!values.email) {
        errors.email = "Email harus diisi";
    } else if (!emailPattern.test(values.email)) {
        errors.email = "Email tidak valid";
    } else {
        errors.email = "";
    }

    if (!values.password) {
        errors.password = "Password harus diisi";
    } else if (values.password.length < 6) {
        errors.password = "Password harus memiliki minimal 6 karakter";
    } else {
        errors.password = "";
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = "Konfirmasi Password harus diisi";
    } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Konfirmasi Password tidak sesuai dengan Password";
    } else {
        errors.confirmPassword = "";
    }

    return errors;
}

export default AuRegisteV;
