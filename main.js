// Danh sách các tên sở GD&ĐT
const nameFile = {
  "01": "Sở GD&ĐT Hà Nội",
  "02": "Sở GD&ĐT TP. Hồ Chí Minh",
  "03": "Sở GD&ĐT Hải Phòng",
  "04": "Sở GD&ĐT Đà Nẵng",
  "05": "Sở GD&ĐT Hà Giang",
  "06": "Sở GD&ĐT Cao Bằng",
  "07": "Sở GD&ĐT Lai Châu",
  "08": "Sở GD&ĐT Lào Cai",
  "09": "Sở GD&ĐT Tuyên Quang",
  "10": "Sở GD&ĐT Lạng Sơn",
  "11": "Sở GD&ĐT Bắc Kạn",
  "12": "Sở GD&ĐT Thái Nguyên",
  "13": "Sở GD&ĐT Yên Bái",
  "14": "Sở GD&ĐT Sơn La",
  "15": "Sở GD&ĐT Phú Thọ",
  "16": "Sở GD&ĐT Vĩnh Phúc",
  "17": "Sở GD&ĐT Quảng Ninh",
  "18": "Sở GD&ĐT Bắc Giang",
  "19": "Sở GD&ĐT Bắc Ninh",
  "21": "Sở GD&ĐT Hải Dương",
  "22": "Sở GD&ĐT Hưng Yên",
  "23": "Sở GD&ĐT Hoà Bình",
  "24": "Sở GD&ĐT Hà Nam",
  "25": "Sở GD&ĐT Nam Định",
  "26": "Sở GD&ĐT Thái Bình",
  "27": "Sở GD&ĐT Ninh Bình",
  "28": "Sở GD&ĐT Thanh Hóa",
  "29": "Sở GD&ĐT Nghệ An",
  "30": "Sở GD&ĐT Hà Tĩnh",
  "31": "Sở GD&ĐT Quảng Bình",
  "32": "Sở GD&ĐT Quảng Trị",
  "33": "Sở GD&ĐT Thừa Thiên-Huế",
  "34": "Sở GD&ĐT Quảng Nam",
  "35": "Sở GD&ĐT Quảng Ngãi",
  "36": "Sở GD&ĐT Kon Tum",
  "37": "Sở GD&ĐT Bình Định",
  "38": "Sở GD&ĐT Gia Lai",
  "39": "Sở GD&ĐT Phú Yên",
  "40": "Sở GD&ĐT Đắk Lắk",
  "41": "Sở GD&ĐT Khánh Hòa",
  "42": "Sở GD&ĐT Lâm Đồng",
  "43": "Sở GD&ĐT Bình Phước",
  "44": "Sở GD&ĐT Bình Dương",
  "45": "Sở GD&ĐT Ninh Thuận",
  "46": "Sở GD&ĐT Tây Ninh",
  "47": "Sở GD&ĐT Bình Thuận",
  "48": "Sở GD&ĐT Đồng Nai",
  "49": "Sở GD&ĐT Long An",
  "50": "Sở GD&ĐT Đồng Tháp",
  "51": "Sở GD&ĐT An Giang",
  "52": "Sở GD&ĐT Bà Rịa-Vũng Tàu",
  "53": "Sở GD&ĐT Tiền Giang",
  "54": "Sở GD&ĐT Kiên Giang",
  "55": "Sở GD&ĐT Cần Thơ",
  "56": "Sở GD&ĐT Bến Tre",
  "57": "Sở GD&ĐT Vĩnh Long",
  "58": "Sở GD&ĐT Trà Vinh",
  "59": "Sở GD&ĐT Sóc Trăng",
  "60": "Sở GD&ĐT Bạc Liêu",
  "61": "Sở GD&ĐT Cà Mau",
  "62": "Sở GD&ĐT Điện Biên",
  "63": "Sở GD&ĐT Đắk Nông",
  "64": "Sở GD&ĐT Hậu Giang",
  "65": "Cục Nhà trường - Bộ Quốc phòng"
};

const language = {
 "N1": "Tiếng Anh" ,
 "N2": "Tiếng Nga",
 "N3": "Tiếng Pháp",
 "N4": "Tiếng Trung Quốc",
 "N5": "Tiếng Đức",
 "N6": "Tiếng Nhật",
 "N7": "Tiếng Hàn"
}

// Hàm kiểm tra điểm
function checking() {
    const sbdElement = document.getElementById("input_check").value;
    const yearElement = document.querySelector("#years").value;
    
    if (sbdElement !== "" && sbdElement.length === 8) {
        fetch(`https://api.sggp.org.vn/api/diem-thi?type=0&keyword=${sbdElement}&kythi=THPT&nam=${yearElement}&cumthi=0`)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json(); // Chuyển đổi phản hồi thành JSON
          })
          .then(data => {
            if (data.data && data.data.results && data.data.results.length > 0) {
              const value = data.data.results[0];
              const nameSC = nameFile[value.sbd.slice(0, 2)];
              console.log(value);
              renderHTML(nameSC, value);
            } else {
              console.error('No results found');
            }
          })
          .catch(error => {
            console.error('There was a problem with the fetch operation:', error.message);
          });
    } else {
        console.error('Số báo danh không hợp lệ');
    }
}

// Hàm render HTML
function renderHTML(unit, score_info) {
  
  const IdHtml = document.getElementById("checking_input_output");
  
  if (!IdHtml) {
    console.error('Element with id "checking_input_output" not found');
    return;
  }

  const html = `
    <div class="inner-container inner-container_output">
      <div class="box">
        <span class="sizeP">${unit}<br /> <span>Số báo danh: ${score_info.sbd}</span></span>
        <table>
          <thead>
            <tr>
              <th>Môn học</th>
              <th>Điểm</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Toán</td><td>
            ${score_info.dm01 === "-1.0" ? "" : score_info.dm01}
            </td></tr>
            <tr><td>Ngữ Văn</td><td>
            ${score_info.dm02 === "-1.0" ? "" : score_info.dm02}
            </td></tr>
            <tr><td>${language[score_info.dmText]}</td><td>
            ${score_info.dm07=== "-1.0" ? "" : score_info.dm07}
            </td></tr>
            <tr><td>Vật Lý</td><td>
            ${score_info.dm03 === "-1.0" ? "" : score_info.dm03}
            </td></tr>
            <tr><td>Hoá Học</td><td>
            ${score_info.dm04 === "-1.0" ? "" : score_info.dm04}
            </td></tr>
            <tr><td>Sinh Học</td><td>
            ${score_info.dm05 === "-1.0" ? "" : score_info.dm05}
            </td></tr>
            <tr><td>Lịch Sử</td><td>
            ${score_info.dm08 === "-1.0" ? "" : score_info.dm08}
            </td></tr>
            <tr><td>Địa Lý</td><td>
            ${score_info.dm09 === "-1.0" ? "" : score_info.dm09}
            </td></tr>
            <tr><td>GDCD</td><td>
            ${score_info.dm10 === "-1.0" ? "" : score_info.dm10}
            </td></tr>
          </tbody>
        </table>
        <button id="backHome">Quay lại</button>
      </div>
    </div>`;

  IdHtml.innerHTML = html;
  
  const button = document.getElementById("backHome");
  button.onclick = function() {
    IdHtml.innerHTML = `
<div class="inner-container">
        <div class="box">
          <h1>Điểm THPT Quốc gia</h1>
         <div class="from">
          <input id="input_check" type="number" placeholder="Nhập số báo danh"/>
          <select id="years" name="years">
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
          </select>
          </div>
          <button onclick="checking()">Kiểm tra</button>
          <p>DỮ LIỆU CẬP NHẬT TỪ <b>SGGP</b></p>
          <p><i>lmg159z</i></p>
        </div>
      </div>`;
  };
}
