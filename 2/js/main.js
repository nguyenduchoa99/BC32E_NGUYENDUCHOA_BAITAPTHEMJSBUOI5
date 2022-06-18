/**
 * Bài 3: Tính thuế thu nhập cá nhân
 * Mô hình 3 khối:
 * - Input: 
 *      + ten: String, thuNhap: Number, soNguoi: Number
 *      + Công thức = Thu nhập - 4,000,000 * 1,650,000* Số người phụ thuộc
 *      + tienThue = Công Thức
 *      + thuNhap >0 && thuNhap <= 60,000,000 => ketQuaBai3 = tienThue*0.05
 *      + thuNhap > 60,000,000 && thuNhap <= 120,000,000 => ketQuaBai3 = tienThue*0.1
 *      + thuNhap > 120,000,000 && thuNhap <= 210,000,000 => ketQuaBai3 = tienThue*0.15
 *      + thuNhap > 210,000,000 && thuNhap <= 384,000,000 => ketQuaBai3 = tienThue*0.2
 *      + thuNhap > 384,000,000 && thuNhap <= 624,000,000 => ketQuaBai3 = tienThue*0.25
 *      + thuNhap > 624,000,000 && thuNhap <= 960,000,000 => ketQuaBai3 = tienThue*0.3
 *      + thuNhap > 960,000,000 => ketQuaBai3 = tienThue*0.35
 * - Output:
 *      + ketQuaBai3 = ?
 */

function thue() {
    var ten = document.getElementById('ten').value;
    var thuNhap = Number(document.getElementById('thuNhap').value);
    var soNguoi = Number(document.getElementById('soNguoi').value);
    var tienThue = thuNhap - 4e6 - 16e5 * soNguoi;
    var ketQuaBai3 = 0;
    if (thuNhap > 0 && thuNhap <= 6e7) {
        ketQuaBai3 = tienThue * 0.05;
    } else if (thuNhap > 6e7 && thuNhap <= 12e7) {
        ketQuaBai3 = tienThue * 0.1;
    } else if (thuNhap > 12e7 && thuNhap <= 21e7) {
        ketQuaBai3 = tienThue * 0.15;
    } else if (thuNhap > 21e7 && thuNhap <= 384e6) {
        ketQuaBai3 = tienThue * 0.2;
    } else if (thuNhap > 384e6 && thuNhap <= 624e6) {
        ketQuaBai3 = tienThue * 0.25;
    } else if (thuNhap > 624e6 && thuNhap <= 96e7) {
        ketQuaBai3 = tienThue * 0.3;
    } else if (thuNhap > 96e7) {
        ketQuaBai3 = tienThue * 0.35;
    } else {
        alert("Số tiền thu nhập không hợp lệ");
    }
    ketQuaBai3 = new Intl.NumberFormat("vn-VN").format(ketQuaBai3);
    document.getElementById('ketQuaBai3').innerHTML = 'Họ tên: ' + ten + '; Tiền thuế thu nhập cá nhân: ' + ketQuaBai3 + ' VND';

}
document.getElementById('btnTinhTienThue').onclick = thue;


/**
 * Bài 4: Tính tiền cáp
 * Mô hình 3 khối:
 * - Input:
 *      + khachHang: String, maKhachHang: Number, soKenhCap: Number, soKetNoi: Number
 * - Xử lý:
 *      + if (khachHang == doanhNghiep && soKetNoi <= 10) => ketQuaBai4 = 15 + 75 + 50 * soKenhCap
 *      + if (khachHang == doanhNghiep && soKetNoi > 10) => ketQuaBai4 = 15 + 75 + 50*soKenhCap + (soKetNoi - 10)*5
 *      + if (khachHang == nhaDan) => ketQuaBai4 = 4.5 + 20.5 + 7.5*soKenhCap
 *      + else => alert('Hãy chọn loại khách hàng')
 * - Output:
 *      + ketQuaBai4 = ?
 */


function disableInput() {
    var khachHang = document.getElementById('khachHang').value;
    document.getElementById('soKetNoi').style.display = "doanhNghiep" == khachHang ? "block" : "none";
}

function tienCap() {
    var khachHang = document.getElementById('khachHang').value;
    var maKhachHang = Number(document.getElementById('maKhachHang').value);
    var soKenhCap = Number(document.getElementById('soKenhCap').value);
    var soKetNoi = Number(document.getElementById('soKetNoi').value);
    var ketQuaBai4 = 0;
    if ("doanhNghiep" == khachHang && soKetNoi <= 10) {
        ketQuaBai4 = 15 + 75 + 50 * soKenhCap;
    } else if ("doanhNghiep" == khachHang && soKetNoi > 10) {
        ketQuaBai4 = 15 + 75 + 50 * soKenhCap + (soKetNoi - 10) * 5;
    }
    else if ("nhaDan" == khachHang) {
        ketQuaBai4 = 4.5 + 20.5 + 7.5 * soKenhCap;
    } else {
        alert('Hãy chọn loại khách hàng');
    }
    document.getElementById('ketQuaBai4').innerHTML = 'Mã khách hàng: ' + maKhachHang + '; Tiền cáp: ' + new Intl.NumberFormat("en-US",
        {
            style: "currency",
            currency: "USD"
        }).format(ketQuaBai4);
}

document.getElementById('btnTinhTienCap').onclick = tienCap;