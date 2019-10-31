'use-strict';

const logger = require('../../../../config/logger');
const format = require('../../../../config/format');

exports.getHTML = async function (body) {

    try {
        let renderTablePayment = '',
            odSum = 0,
            totalAngsuran = 0,
            penaltyCalcSum = 0,
            penaltyPaidSum = 0,
            contract = body.contract,
            history = body.history,
            due, paid, koleksi;
        for await (const detail of history) {
            due = await format.dateFormat(detail.arecInstDate, "MMM DD YYYY");
            paid = await format.dateFormat(detail.arecTranDatetime, "MMM DD YYYY");
            koleksi = await format.dateFormat(detail.arecRefDatetime, "MMM DD YYYY");
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
                <td>${detail.bankName ? detail.bankName : ''}</td>
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