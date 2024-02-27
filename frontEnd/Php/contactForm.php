<?php
if ($_POST['username'] != "") {
    $username = ($_POST['username'] ? $_POST['username'] : '');
    $tel = ($_POST['tel'] ? $_POST['tel'] : '');
    $email = ($_POST['email'] ? $_POST['email'] : '');
    $city = ($_POST['city'] ? $_POST['city'] : '');
    $dis = ($_POST['dis'] ? $_POST['dis'] : '');
    $lang = ($_POST['lang'] ? $_POST['lang'] : '');
    $dis = ($_POST['time'] ? $_POST['time'] : '');
    $message = ($_POST['message'] ? $_POST['message'] : '');

    $to = "healthcare@newdirections.co.in";
    $subject = 'Enquiry from Health-care Contact';

    $msg = '<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#dedede">
                <tr>
                    <td align="center" valign="top">
                        <table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell">
                            <tr>
                                <td class="td container" style="width:650px; min-width:650px; font-size:0pt; line-height:0pt; margin:0; font-weight:normal; padding:55px 0px;">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                        <tr>
                                            <td>
                                                <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff" >
                                                    <tr>
                                                        <td class="p30-15" style="padding: 50px 30px;">
                                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="padding-left:50px;">
                                                                <tr>
                                                                    <td class="text pb20" style="color:#777777; font-family:\'Noto Sans\', Arial,sans-serif; font-size:13px; line-height:15px; text-align:left; padding-top:20px; width:30%;"><b> Name :</b>  </td>
                                                                    <td class="text pb20" style="color:#777777; font-family:\'Noto Sans\', Arial,sans-serif; font-size:13px; line-height:15px; text-align:left; padding-top:20px;"> ' . $username . '</td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="text pb20" style="color:#777777; font-family:\'Noto Sans\', Arial,sans-serif; font-size:13px; line-height:15px; text-align:left; padding-top:20px; width:30%;"> <b> Email ID :</b>  </td>
                                                                    <td class="text pb20" style="color:#777777; font-family:\'Noto Sans\', Arial,sans-serif; font-size:13px; line-height:15px; text-align:left; padding-top:20px;"> ' . $tel . '</td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="text pb20" style="color:#777777; font-family:\'Noto Sans\', Arial,sans-serif; font-size:13px; line-height:15px; text-align:left; padding-top:20px; width:30%;"> <b> Email ID :</b>  </td>
                                                                    <td class="text pb20" style="color:#777777; font-family:\'Noto Sans\', Arial,sans-serif; font-size:13px; line-height:15px; text-align:left; padding-top:20px;"> ' . $email . '</td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="text pb20" style="color:#777777; font-family:\'Noto Sans\', Arial,sans-serif; font-size:13px; line-height:15px; text-align:left; padding-top:20px; width:30%;"> <b> Mobile NO :</b>  </td>
                                                                    <td class="text pb20" style="color:#777777; font-family:\'Noto Sans\', Arial,sans-serif; font-size:13px; line-height:15px; text-align:left; padding-top:20px;"> ' . $city . '</td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="text pb20" style="color:#777777; font-family:\'Noto Sans\', Arial,sans-serif; font-size:13px; line-height:15px; text-align:left; padding-top:20px; width:30%;"> <b> Message :</b>  </td>
                                                                    <td class="text pb20" style="color:#777777; font-family:\'Noto Sans\', Arial,sans-serif; font-size:13px; line-height:15px; text-align:left; padding-top:20px;"> ' . $dis . '</td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="text pb20" style="color:#777777; font-family:\'Noto Sans\', Arial,sans-serif; font-size:13px; line-height:15px; text-align:left; padding-top:20px; width:30%;"> <b> Message :</b>  </td>
                                                                    <td class="text pb20" style="color:#777777; font-family:\'Noto Sans\', Arial,sans-serif; font-size:13px; line-height:15px; text-align:left; padding-top:20px;"> ' . $lang . '</td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="text pb20" style="color:#777777; font-family:\'Noto Sans\', Arial,sans-serif; font-size:13px; line-height:15px; text-align:left; padding-top:20px; width:30%;"> <b> Message :</b>  </td>
                                                                    <td class="text pb20" style="color:#777777; font-family:\'Noto Sans\', Arial,sans-serif; font-size:13px; line-height:15px; text-align:left; padding-top:20px;"> ' . $time . '</td>
                                                                </tr
                                                                <tr>
                                                                <td class="text pb20" style="color:#777777; font-family:\'Noto Sans\', Arial,sans-serif; font-size:13px; line-height:15px; text-align:left; padding-top:20px; width:30%;"> <b> Message :</b>  </td>
                                                                <td class="text pb20" style="color:#777777; font-family:\'Noto Sans\', Arial,sans-serif; font-size:13px; line-height:15px; text-align:left; padding-top:20px;"> ' . $message . '</td>
                                                            </tr>
                                                                
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>';


    $header = "MIME-Version: 1.0\r\n";
    $header .= "Content-type: text/html\r\n";
    $headers .= "Reply-To: " . $username . " \r\n";
    $headers .= "From:  " . $username . " <" . $email . " > \r\n";
    $retval = mail($to, $subject, $message, $header);
    if ($retval == true) {
        header('Location: thank-you.php');
    } else {
        header('Location: index.php');
    }
}
