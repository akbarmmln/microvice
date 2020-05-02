'use-strict';

const logger = require('../../../../config/logger');
const format = require('../../../../config/format');

exports.getHTMLHISPAY = async function(body) {
    try {
        let renderTablePayment = '', 
        odSum = 0, 
        totalAngsuran = 0, 
        penaltyCalcSum = 0, 
        penaltyPaidSum = 0,
        contract = body.contract,
        history = body.history,
        due,paid,koleksi;
        for await(const detail of history){
            due = await format.dateFormat(detail.arecInstDate,"MMM DD YYYY");
            paid = await format.dateFormat(detail.arecTranDatetime,"MMM DD YYYY");
            koleksi = await format.dateFormat(detail.arecRefDatetime,"MMM DD YYYY");
            if (paid === 'Invalid date') {
                paid = ''
            }
            if (koleksi === 'Invalid date') {
                koleksi = ''
            }
            angsuran = await format.rupiahFormat(detail.angsuran, ".");
            calc = await format.rupiahFormat(detail.arecPnltCalc, ".");
            angPaid = await format.rupiahFormat(detail.arecPnltPaid, ".");
            odSum += parseInt(detail.newOd) ? parseInt(detail.newOd) : 0;
            totalAngsuran += parseInt(detail.angsuran) ? parseInt(detail.angsuran) : 0;
            penaltyCalcSum += parseInt(detail.arecPnltCalc) ? parseInt(detail.arecPnltCalc) : 0;
            penaltyPaidSum += parseInt(detail.arecPnltPaid) ? parseInt(detail.arecPnltPaid) : 0;
            renderTablePayment += 
            `<tr style='text-align: center'>
                <td>${detail.arecInstNo ? detail.arecInstNo : ''}</td>
                <td>${due ? due : ''}</td>
                <td>${paid ? paid : ''}</td>
                <td>${koleksi ? koleksi : ''}</td>
                <td>${detail.newOd ? detail.newOd : 0}</td>
                <td>${detail.arecRefNo ? detail.arecRefNo : ''}</td>
                <td>${detail.kolektor ? detail.kolektor : ''}</td>
                <td>${angsuran ? angsuran : ''}</td>
                <td>${detail.paid ? detail.paid : ''}</td>
                <td>${calc ? calc : ''}</td>
                <td>${angPaid ? angPaid : ''}</td>
                <td>${detail.collAgent ? (detail.collAgent != '' ? detail.collAgent : detail.bankName) : detail.bankName ? detail.bankName : ''}</td>
                <td>${detail.userId ? detail.userId : ''}</td>
            </tr>`;
        }
        let showAngsuran = await format.rupiahFormat(totalAngsuran, "."),
        showCalcSum = await format.rupiahFormat(penaltyCalcSum, "."),
        showPaidSum = await format.rupiahFormat(penaltyPaidSum, ".");
        return `
            <!DOCTYPE HTML>
            <html>
                <style>
                    body {
                        min-height: 100%;
                        margin: 0;
                        margin-left: 0.20in !important;
                        padding: 0;
                    }
                    html {
                        height: 100%;
                    }
                    table, td, th {
                        border: 1px solid black;
                        border-collapse: collapse;
                        word-wrap:break-word;
                        font-size: 9px;
                        padding: 5px;
                        font-family: Arial;
                    }
                    .background {
                        background: url('http://adira-akses-dev.oss-ap-southeast-5.aliyuncs.com/watermark/watermark_2019051615220518.png');
                        background-size: cover;
                        display: block;
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 7.5in;
                        height: 12.34in;
                        z-index: -1;
                    }
                    .title {
                        font-weight: normal; 
                        -webkit-text-stroke: 0.05em;
                        font-size: 10px;
                    }
                    th[rowspan] {
                        position: relative;
                    }
                    th[rowspan]:before {
                        position: absolute;
                        content: "";
                        top: -1px;
                        left: -1px;
                        background-color: transparent;
                        border: solid black 1px;
                        width: 100%;
                        height: 100%;
                    }
                </style>
                <body class="background">
                    <h1 style="text-align: center; font-family: Arial;">Riwayat Pembayaran</h1>
                    <table style="width:100%;">
                    <tr>
                        <td class='title'>
                        No. Kontrak
                        </td>
                        <td>
                        : ${contract.arecContNo}
                        </td>
                        <td class='title'>
                        Nama CMO
                        </td>
                        <td>
                        : ${contract.emplName}
                        </td>
                        <td class='title'>
                        No. Rangka
                        </td>
                        <td>
                        : ${contract.product_frame_no}
                        </td>
                        <td class='title'>
                        Tenor
                        </td>
                        <td>
                        : ${contract.arecTop} / ${contract.payterm}
                        </td>
                    </tr>
                    <tr>
                        <td class='title'>
                        Nama Nasabah
                        </td>
                        <td>
                        : ${contract.custName}
                        </td>
                        <td class='title'>
                        Produk
                        </td>
                        <td>
                        : ${contract.product_brand} ${contract.product_model}
                        </td>
                        <td class='title'>
                        No. Mesin
                        </td>
                        <td>
                        : ${contract.product_machine_no}
                        </td>
                        <td class='title'>
                        No Polisi
                        </td>
                        <td>
                        : ${contract.product_no_pol}
                        </td>
                    </tr>
                    <tr>
                        <td class='title'>
                        Alamat KTP
                        </td>
                        <td colspan="3">
                        : ${contract.alamat}
                        </td>
                        <td class='title'>
                        Kolektor
                        </td>
                        <td colspan="3">
                        : ${contract.kolektorUmum}
                        </td>
                    </tr>
                    <tr>
                        <td class='title'>
                        Alamat Tagih
                        </td>
                        <td colspan="3">
                        : ${contract.custColcAddr}
                        </td>
                        <td class='title'>
                        Cara Bayar
                        </td>
                        <td>
                        : ${contract.paymTypeDesc}
                        </td>
                        <td class='title'>
                        Printed
                        </td>
                        <td>
                        : ${contract.timestamp}
                        </td>
                    </tr>
                    <tr>
                        <td class='title'>
                        Alamat Lain
                        </td>
                        <td colspan="3">
                        : ${contract.custOtherAddr}
                        </td>
                        <td class='title'>
                        Nama CFO
                        </td>
                        <td>
                        : ${contract.insfInsfName}
                        </td>
                        <td class='title'>
                        Salesthrough
                        </td>
                        <td>
                        : ${contract.sales_through}
                        </td>
                    </tr>
                    </table>
                    <table style="width:100%; margin-top: 30px;">
                    <tr class='title'>
                        <th rowspan="2">Ke</th>
                        <th colspan="3">Tanggal</th>
                        <th rowspan="2" colspan="1">Hari</th>
                        <th rowspan="2">No. Ref.</th>
                        <th rowspan="2">Kolektor</th>
                        <th rowspan="2">Angsuran</th>
                        <th rowspan="2">Ket</th>
                        <th colspan="2">Denda</th>
                        <th rowspan="2">No. PDC / CollectingAgents</th>
                        <th rowspan="2">User ID</th>
                    </tr>
                    <tr class='title'>
                        <th>Due</th>
                        <th>Paid</th>
                        <th>Koleksi</th>
                        <th>Calc</th>
                        <th>Paid</th>
                    </tr>
                    ${renderTablePayment}
                    <tr style='text-align: center' class='title'>
                        <td colspan="4" style='text-align: right'>Total</td>
                        <td>${odSum}</td>
                        <td></td>
                        <td></td>
                        <td>${showAngsuran}</td>
                        <td></td>
                        <td>${showCalcSum}</td>
                        <td>${showPaidSum}</td>
                        <td></td>
                        <td></td>
                    </tr>
                    </table>
                </body>
            </html>
            `;
    } catch (e) {
        logger.error('error creating HTML', e.toString());
        throw e;
    }
}

exports.getHTMLMAIL = async function(data){
    try{
        return `
        <!DOCTYPE html>
        <head>
            <style>
            .clearfix:after {
            content: "";
            display: table;
            clear: both;
            }

            a {
            color: #5D6975;
            text-decoration: underline;
            }
            
            body {
            position: relative;
            width: 21cm;  
            height: 29.7cm; 
            margin: 0 auto; 
            color: #001028;
            background: #FFFFFF; 
            font-family: Arial, sans-serif; 
            font-size: 12px; 
            font-family: Arial;
            }
            
            header {
            padding: 10px 0;
            margin-bottom: 30px;
            }
            
            #logo {
            text-align: center;
            margin-bottom: 10px;
            }
            
            #logo img {
            width: 90px;
            }
            
            h1 {
            font-weight: normal;
            text-align: center;
            margin: 0 0 20px 0;
            }
            
            #project {
            float: left;
            }
            
            #project span {
            color: #5D6975;
            text-align: right;
            width: 52px;
            margin-right: 10px;
            display: inline-block;
            font-size: 0.8em;
            }
            
            #company {
            float: right;
            text-align: right;
            }
            
            #project div,
            #company div {
            white-space: nowrap;        
            }
            
            table {
            width: 100%;
            border-collapse: collapse;
            border-spacing: 0;
            margin-bottom: 20px; 
            text-align: center;
            }
            
            footer {
            color: #5D6975;
            width: 100%;
            height: 30px;
            position: absolute;
            bottom: 0;
            border-top: 1px solid #C1CED9;
            padding: 8px 0;
            text-align: center;
            }

            .images {
                background-image: url("https://adira-akses-prod.oss-ap-southeast-5.aliyuncs.com/restruktur/Rectangle.png");
                background-repeat: no-repeat;
                display: block; 
                margin-left: auto; 
                margin-right: auto;
                width: 465px;
                height: 50px;
            }
            </style>
        </head>
        <html lang="en">
          <body>
            <header class="clearfix">
              <div>
                <img src="https://adira-akses-prod.oss-ap-southeast-5.aliyuncs.com/restruktur/header.png">
              </div>
              <img style="width:100%;" src="https://adira-akses-prod.oss-ap-southeast-5.aliyuncs.com/restruktur/Vector.png">
              <br><br>
              <h1>Pengajuan Anda sedang dalam proses</h1>
              <br>
              <div>
                    <img style="display: block; margin-left: auto; margin-right: auto;" style="text-align: center;" src="https://adira-akses-prod.oss-ap-southeast-5.aliyuncs.com/restruktur/body.png">
              </div>
              <br>
              <p style="text-align: center;">Terima kasih, Anda telah mengajukan program</p>
              <p style="text-align: center;">restrukturisasi Covid-19 Adira Finance</p>
            </header>
            <main>
                    <table style="width: 100%; font-size:15px; ">
                            <tbody>
                            <tr>
                            <td style="text-align:left;width: 48.9922%;">
                            <p>Angsuran Baru</p>
                            </td>
                            <td style="text-align:left;width: 48.8372%;"></td>
                            </tr>
                            <tr>
                            <td style="text-align:left;width: 48.9922%;"><strong>${await format.rupiahFormat(data.angsuran_baru, '.')}</strong></td>
                            <td style="text-align:left;width: 48.8372%;"></td>
                            </tr>
                            <tr>
                            <td style="text-align:left;width: 48.9922%;">
                            <p>Penambahan Tenor Baru</p>
                            </td>
                            <td style="text-align:left;width: 48.8372%;">Total Tenor Baru</td>
                            </tr>
                            <tr>
                            <td style="text-align:left;width: 48.9922%;"><strong>${data.penambahan_tenor} Bulan</strong></td>
                            <td style="text-align:left;width: 48.8372%;"><strong>${data.total_tenor_baru} Bulan</strong></td>
                            </tr>
                            <tr>
                            <td style="text-align:left;width: 48.9922%;">
                            <p>No. pp</p>
                            </td>
                            <td style="text-align:left;width: 48.8372%;">Nama Produk</td>
                            </tr>
                            <tr>
                            <td style="text-align:left;width: 48.9922%;"><strong>${data.nopp}</strong></td>
                            <td style="text-align:left;width: 48.8372%;"><strong>${data.nama_produk}</strong></td>
                            </tr>
                            <tr>
                            <td style="text-align:left;width: 48.9922%;">
                            <p>Tanggal Pengajuan</p>
                            </td>
                            <td style="text-align:left;width: 48.8372%;">Estimasi Jatuh Tempo Berikutnya</td>
                            </tr>
                            <tr>
                            <td style="text-align:left;width: 48.9922%;"><strong>${data.tanggal_pengajuan}</strong></td>
                            <td style="text-align:left;width: 48.8372%;"><strong>${data.est_jatuh_temp}</strong></td>
                            </tr>
                            </tbody>
                    </table>
                    <br>
                    <a style="text-decoration:none" href="${data.download_link}"><div class="images"><p style="font-size:14px;padding:12px;text-align:center">Unduh Formulir Restrukturisasi Covid 19</p></div></a>
                    <p style="font-size:14px;text-align:center;">Email dibuat secara otomatis. Mohon tidak mengirimkan balasan ke email ini.</p>
            </main>
            <img style="width:100%;" src="https://adira-akses-prod.oss-ap-southeast-5.aliyuncs.com/restruktur/Vector.png">
                    <table style="width: 100%;">
                        <tbody>
                            <tr>
                                <td style="width: 93%; text-align: left;">Download aplikasi adiraku</td>
                                <td style="width: 10%; text-align: right;" colspan="3">Follow us On</td>
                            </tr>
                            <tr>
                                <td style="width:45%;text-align:left;"><img src="https://adira-akses-prod.oss-ap-southeast-5.aliyuncs.com/restruktur/playstore.png" width="100" height="40"></td>
                                <td style="width: 30.4651%;"><img src="https://adira-akses-prod.oss-ap-southeast-5.aliyuncs.com/restruktur/image%203.png" alt="" width="40" height="40" /></td>
                                <td style="width: 10%;"><img src="https://adira-akses-prod.oss-ap-southeast-5.aliyuncs.com/restruktur/image%202.png" alt="" width="40" height="40" /></td>
                                <td style="width: 25%;"><img src="https://adira-akses-prod.oss-ap-southeast-5.aliyuncs.com/restruktur/image%201.png" alt="" width="40" height="40" /></td>
                            </tr>
                        </tbody>
                    </table>
          </body>
        </html>
        `;
    }catch(e){
        logger.error('error creating HTML', e.toString());
        throw e;
    }
}

exports.getHTMLDOC = async function(data) {
    try{
        return `
        <!DOCTYPE HTML>
        <html>
            <style>
                body {
                    min-height: 100%;
                    margin: 0;
                    margin-top: 0.30in !important;
                    margin-left: 0.30in !important;
                    margin-right: 0.30in !important;
                    margin-bottom: 0.30in !important;
                    padding: 0;
                    font-size: 70%;
                    font-family: Times New Roman;
                }
                html {
                    height: 100%;
                }
                table, td, th {
                    border-collapse: collapse;
                    word-wrap:break-word;
                    font-size: 10px;
                    padding: 5px;
                    font-family: Times New Roman;
                }
                th[rowspan] {
                    position: relative;
                }
                th[rowspan]:before {
                    position: absolute;
                    content: "";
                    top: -1px;
                    left: -1px;
                    background-color: transparent;
                    border: solid black 1px;
                    width: 100%;
                    height: 100%;
                }
            </style>
            <body>
                <p style="text-align: right; font-size:75%">&#8718;&#8718;&#8718; Nomor Formulir: ${data.noform} &#8718;&#8718;&#8718;</p>
                <p style="font-weight:bold; text-align:center;">SURAT PERNYATAAN DAN KUASA</p>
                <br>
                <p style="text-align: left;">Yang bertanda tangan di bawah ini :</p>
                <table style="width: 100%;">
                <tr>
                <td style="width: 105px;">Nama</td>
                <td>: ${data.nama}</td>
                </tr>
                <tr>
                <td style="width: 105px;">NIK KTP</td>
                <td>: ${data.nik}</td>
                </tr>
                <tr>
                <td style="width: 105px;">Alamat</td>
                <td>: ${data.alamat}</td>
                </tr>
                </table>
                <p style="display:block;margin-top:2em;margin-bottom:2em;margin-left:0;margin-right:0;text-align:justify;">Dalam hal ini bertindak untuk dan atas nama diri sendiri/PT/Koperasi/Yayasan/Firma/CV ................................*), berkedudukan di ......................., beralamat di ........................................................................... bertindak selaku Debitur/Konsumen (selanjutnya disebut sebagai "Konsumen") dari PT. ADIRA DINAMIKA MULTIFINANCE, Tbk Cabang ${data.cabang} (Adira Finance) dengan rincian sebagai berikut:</p>
                <table style="width: 100%;">
                <tbody>
                <tr>
                <td>No. Perjanjian Pembiayaan</td>
                <td>: ${data.no_perjanjian_pembiayaan}</td>
                <td>No. Polisi</td>
                <td>: ${data.nopolisi}</td>
                </tr>
                <tr>
                <td>Tanggal Perjanjian Pembiayaan</td>
                <td>: ${data.tgl_perjanjian_pembiayaan}</td>
                <td>No. Rangka</td>
                <td>: ${data.norangka}</td>
                </tr>
                <tr>
                <td>Objek Pembiayaan</td>
                <td>: ${data.objek_pembiayaan}</td>
                <td>No. Mesin</td>
                <td>: ${data.nomesin}</td>
                </tr>
                <tr>
                <td>Merk/Model</td>
                <td>: ${data.merek_or_model}</td>
                </tr>
                </tbody>
                </table>
                <p>(Selanjutnya disebut "Perjanjian Pembiayaan")</p>
                <p>Bahwa untuk menindaklanjuti permohonan restrukturisasi Perjanjian Pembiayaan di atas, menyatakan hal-hal sebagai berikut:</p>
                <ol>
                <li style="text-align: justify;">Dengan ini menyatakan menyetujui perubahan yang dilakukan terhadap Perjanjian Pembiayaan dengan rincian sebagai berikut:
                    <table style="height: auto; width: 100%;" border="0" cellspacing="0" cellpadding="0">
                        <tbody>
                        <tr>
                            <td style="width:50%; style="font-weight:bold" colspan="4"><p>ANGSURAN SAAT INI</p></td>
                            <td style="width:50%; style="font-weight:bold" colspan="3"><p">ANGSURAN BARU</p></td>
                        </tr>
                        <tr style="height: 14px;">
                            <td style="width:20%">Angsuran Perbulan</td>
                            <td>:</td>
                            <td style="width:auto">${await format.rupiahFormat(data.ast_angsuran_perbulan, '.')}</td>
                            <td></td>
                            <td style="width:20%">Sebagian Angsuran di muka</td>
                            <td>:</td>
                            <td style="width:auto">${await format.rupiahFormat(data.asb_sebagian_angsuran_dimuka, '.')}</td>
                        </tr>
                        <tr style="height: 14px;">
                            <td style="width:20%">Tgl Jatuh tempo angsuran terakhir</td>
                            <td>:</td>
                            <td style="width:auto">${data.ast_tgl_jatuh_tempo_angsuran_terakhir}</td>
                            <td></td>
                            <td style="width:20%">Biaya Asuransi</td>
                            <td>:</td>
                            <td style="width:auto">${await format.rupiahFormat(data.asb_biaya_asuransi, '.')}</td>
                        </tr>
                        <tr style="height: 14px;">
                            <td style="width:20%">Angsuran Tertunggak</td>
                            <td>:</td>
                            <td style="width:auto">${await format.rupiahFormat(data.ast_angsuran_tertunggak, '.')}</td>
                            <td></td>
                            <td style="width:20%">Total Pokok Pembiayaan Baru</td>
                            <td>:</td>
                            <td style="width:auto">${await format.rupiahFormat(data.asb_total_pokok_pembiayaan_baru, '.')}</td>
                        </tr>
                        <tr style="height: 14px;">
                            <td style="width:20%">Nilai Preterm</td>
                            <td>:</td>
                            <td style="width:auto">${await format.rupiahFormat(data.ast_nilai_preterm, '.')}</td>
                            <td></td>
                            <td style="width:20%">Angsuran Jatuh Setiap Tanggal</td>
                            <td>:</td>
                            <td style="width:auto">${data.asb_angsuran_jatuh_tempo_setiap_tanggal}</td>
                        </tr>
                        <tr style="height: 14px;">
                            <td style="width:20%">Total Denda Belum Terbayar</td>
                            <td>:</td>
                            <td style="width:auto">${await format.rupiahFormat(data.ast_total_denda_belum_terbayar, '.')}</td>
                            <td></td>
                            <td style="width:20%">Tgl Jatuh Tempo Angsuran Berikutnya</td>
                            <td>:</td>
                            <td style="width:auto">${data.asb_tgl_jatuh_tempo_angsuran_berikutnya}</td>
                        </tr>
                        <tr style="height: 14px;">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td style="width:20%">Tgl Jatuh Tempo Angsuran Terakhir</td>
                            <td>:</td>
                            <td style="width:auto">${data.asb_tgl_jatuh_tempo_angsuran_terakhir}</td>
                        </tr>
                        <tr style="height: 14px;">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td style="width:20%">Angsuran Perbulan</td>
                            <td>:</td>
                            <td style="width:auto">${await format.rupiahFormat(data.asb_angsuran_perbulan, '.')}</td>
                        </tr>
                        <tr style="height: 14px;">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td style="width:20%">Periode Mulai Asuransi</td>
                            <td>:</td>
                            <td style="auto">${data.asb_periode_mulai_asuransi}</td>
                        </tr>
                        <tr style="height: 14px;">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td style="width:20%">Periode Berakhir Asuransi</td>
                            <td>:</td>
                            <td style="width:auto">${data.asb_periode_berakhir_asuransi}</td>
                        </tr>
                        <tr style="height: 14px;">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td style="width:20%">Sisa Denda**)</td>
                            <td>:</td>
                            <td style="width:auto">${await format.rupiahFormat(data.asb_sisa_denda, '.')}</td>
                        </tr>
                        </tbody>
                    </table>
                </li>
                <br>
                <li style="text-align: justify;">Memberikan kuasa tanpa hak substitusi kepada Adira Finance untuk menandatangani perjanjian pembiayaan yang terkait dengan perubahan sebagaimana dimaksud pada butir 1 di atas. Konsumen dengan ini mengesampingkan Pasal 1813 dan Pasal 1814 KUHPerdata, sehingga pemberian kuasa ini tidak dapat dicabut hingga seluruh kewajiban Konsumen berdasarkan Perjanjian Pembiayaan dipenuhi.</li>
                <br>
                <li style="text-align: justify;">Saya berjanji akan menyerahkan asli Surat Pernyataan dan Kuasa ini kepada Adira Finance</li>
                <br>
                <li style="text-align: justify;">Surat Pernyataan dan Kuasa ini diberikan berdasarkan kebijakan pemerintah terkait program restrukturisasi akibat Pandemi Covid-19 dan kebijakan physical/social distancing.</li>
                </ol>
                <p>Demikian Surat Pernyataan dan Kuasa ini diberikan untuk dilaksanakan sebagaimana mestinya.</p>
                <p>.........................................., ......................................</p>
                <table style="width="100%">
                <tbody>
                <tr style="height: 78px;">
                <td style="width: 315px; text-align: center; height: 78px;">Konsumen,</td>
                <td style="width: 316px; height: 78px;">
                <p style="text-align: center;">Menyetujui***)</p>
                <p style="text-align: center;">(Komisaris/Suami/Istri),*)</p>
                </td>
                </tr>
                <tr style="height: 11px;">
                <td style="width: 315px; height: 11px;">
                <p>&nbsp;</p>
                <hr /></td>
                <td style="width: 316px; height: 11px;">
                <p>&nbsp;</p>
                <hr /></td>
                </tr>
                </tbody>
                </table>
                <p style="font-size: 70%;"><em>*) coret yang tidak perlu</em></p>
                <p style="font-size: 70%;"><em>**) perhitungan denda akan berubah sesuai hari keterlambatan</em></p>
                <p style="font-size: 70%;"><em>***) sesuai hukum yang berlaku</em></p>
            </body>
        </html>
        `;
    }catch(e){
        logger.error('error creating HTML', e.toString());
        throw e;
    }
}