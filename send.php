<?php

extract($_POST);

$mens = "
<meta content=\"text/html; charset=utf-8\">
<table width='665' border='0' cellspacing='0' cellpadding='0' align='center'>
  <tr>
    <td bgcolor='#494949'>&nbsp;</td>
  </tr>
  <tr>
    <td align='center'>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <a href='http://www.google.com'>
        <img border='0' alt='' width='1600' height='838' src='http://www.google.com.br/dist/images/social.jpg'  />
      </a>
    </td>
  </tr>
  <tr>
    <td>
      <div style='width:620px; margin:10px auto; text-align:justify; font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:18px'>
        <table width='620' border='0' cellspacing='3' cellpadding='10' align='center'>

          <tr>
            <td align='left' valign='top' style='border: 0px; background:#FFFFFF' bgcolor='#FFFFFF'>

              <b>Nome:</b> ".$nome."<br /><br />
              <b>Email:</b> ".$email."<br /><br />
              <b>Mensagem:</b> ".$mensagem."<br /><br />
              <b>Data:</b> ".date("d/m/Y H:i:s")."<br /><br />
            </td>
          </tr>


        </table>
        <center>


          <br />

        </center></div>
      </td>
    </tr>
    <tr>
      <td bgcolor='#494949' width='665' height='85'>
      </td>
    </tr>

  </table>
  ";

  if ($_SERVER[HTTP_HOST]) {
        $emailsender= $email;
      } else {
        $emailsender = $email;
      }


    if(PATH_SEPARATOR == ";") $quebra_linha = "\r\n";
    else $quebra_linha = "\n";

    $cabecalho = "From: $nome <$emailsender> $quebra_linha";
    $cabecalho .= "Reply-To: $nome <$email> $quebra_linha";
    $cabecalho .= "MIME-Version: 1.0$quebra_linha";
    $cabecalho .= "Content-type: text/html; charset=uft-8$quebra_linha";

    $envia = mail("email@gmail.com", "Contato site", utf8_decode($mens),$cabecalho,"-r".$emailsender);
    $envia .= mail("email2@gmail.com", "Contato site", utf8_decode($mens),$cabecalho,"-r".$emailsender);


    if($envia){
      echo "Email enviado com sucesso!";
    } else{
      echo "Erro ao enviar o email. Por favor, tente novamente em alguns minutos.";
    }
?>
