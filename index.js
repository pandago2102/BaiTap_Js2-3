console.log("first");
// mô hình 3 khoi
// InPUT
// 1 ngay 100k,so ngay luong

// cac buoc xu ly

function tinhTongLuong() {
  var ketQua = 0;
  var soNgayLuong = document.getElementById("nhapSoNgayLuong").value * 1;
  console.log(soNgayLuong);
  ketQua = soNgayLuong * 100;
  console.log(ketQua);
  //   output
  document.getElementById("hienThiKetQua").innerHTML = ketQua + ".000" + "VND";
}

function tinhTrungBinh() {
  var ketQuaTrungBinh = 0;
  var soThuc1 = document.getElementById("nhapSoThuc1").value * 1;
  console.log(soThuc1);
  var soThuc2 = document.getElementById("nhapSoThuc2").value * 1;
  console.log(soThuc2);
  var soThuc3 = document.getElementById("nhapSoThuc3").value * 1;
  console.log(soThuc3);
  var soThuc4 = document.getElementById("nhapSoThuc4").value * 1;
  console.log(soThuc4);
  var soThuc5 = document.getElementById("nhapSoThuc5").value * 1;
  console.log(soThuc5);
  ketQuaTrungBinh = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) / 5;
  console.log(ketQuaTrungBinh);
  document.getElementById("hienThiKetQua2").innerHTML =
    "so trung binh cua 5 so la :" + ketQuaTrungBinh;
}

function tinhTienQuyDoi() {
  var ketQuaQuyDoi = 0;
  var nhapTienUSD = document.getElementById("nhapSoTienUSD").value * 1;
  console.log(nhapTienUSD);
  ketQuaQuyDoi = nhapTienUSD * 23500;
  console.log(ketQuaQuyDoi);
  document.getElementById("hienThiKetQua3").innerHTML = ketQuaQuyDoi + "VND";
}

function tinhChuViDienTich() {
  var ketQuaChuVi = 0;
  var ketQuaDienTich = 0;
  var soChieuDai = document.getElementById("nhapSoChieuDai").value * 1;
  var soChieuRong = document.getElementById("nhapSoChieuRong").value * 1;
  ketQuaDienTich = soChieuDai * soChieuRong;
  ketQuaChuVi = (soChieuDai + soChieuRong) * 2;
  console.log(ketQuaDienTich);
  console.log(ketQuaChuVi);
  document.getElementById("hienThiKetQuaChuVi4").innerHTML =
    "chu vi la:" + ketQuaChuVi;
  document.getElementById("hienThiKetQuaDienTich4").innerHTML =
    "dien tich la:" + ketQuaDienTich;
}

function tinhTongKySo() {
  var tongKySo = 0;
  var soKySo = document.getElementById("nhapSoKySo").value * 1;
  var soDonViKySo = Math.floor(soKySo % 10);
  var soChucKySo = Math.floor(soKySo / 10);
  tongKySo = soDonViKySo + soChucKySo;
  document.getElementById("hienThiKetQua5").innerHTML = tongKySo;
}