const nodemailer = require('nodemailer');
const express = require('express');
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
    }
  })
  var upload = multer({ storage: storage }).array('file', 100);

const path = require('path');
const res = require('express/lib/response');
const req = require('express/lib/request');
const PORT = process.env.PORT || 3000

const app = express();

app.use(express.static(path.join(__dirname + 'public/uploads')))

app.get('/', (req, res) =>{
    res.send('Esperando un email...');
});
 app.use(express.urlencoded({extended: false}));
let paths = []

app.post('/sendemail', (req, res) =>{
    upload(req, res, (error) =>{
        if(error){
            console.log("Error in uploading files")
            return
        }else{
            res.sendFile(path.join(__dirname, '/carga.html'));
            test = { cliente, ide, tamano, precio, correo, nombre} = req.body;
            contentHTML = `
            <table class="body-wrap" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; background-color: #f6f6f6; margin: 0;">
            <tbody>
            <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
            <td style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0px; text-align: left;">&nbsp;</td>
            <td class="container" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; display: block !important; max-width: 600px !important; clear: both !important; margin: 0 auto;">
            <div class="content" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; max-width: 600px; display: block; margin: 0 auto; padding: 20px;">
            <table class="main" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; border-radius: 3px; background-color: #fff; margin: 0; border: 1px solid #0f206c;">
            <tbody>
            <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
            <td class="" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 16px; vertical-align: top; color: #fff; font-weight: 500; text-align: center; border-radius: 3px 3px 0 0; background-color: #0f206c; margin: 0; padding: 20px;"><span style="font-size: 18pt; color: #f7b200;"><strong> GoSolar Request Credit Analysis</strong></span> <br><span style="margin-top: 10px; display: block;">El vendedor ${nombre} ha solicitado se realice el siguiente estudio de cr&eacute;dito.</span></td>
            </tr>
            <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
            <td class="content-wrap" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 20px;">
            <table style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0px; width: 100.195%;">
            <tbody>
            <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
            <td class="content-block" style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0px; padding: 0px 0px 20px; width: 62.6459%;">Se cre&oacute; una <strong style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"> Solicitud de Cr&eacute;dito</strong> ||<span style="color: #f7b200;">GoSolar</span>.</td>
            </tr>
            <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
            <td class="content-block" style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0px; padding: 0px 0px 20px; width: 62.6459%;"><span style="color: #3598db;"><span style="color: #0f206c;">Nombre del Cliente:</span> <span style="color: #000000;"><em>${cliente}</em></span></span></td>
            <td class="content-block" style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0px; padding: 0px 0px 20px; width: 37.1595%;"><span style="color: #0f206c;">n.&ordm; de c&eacute;dula Jur&iacute;dica:</span> <em>${ide}</em></td>
            </tr>
            <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
            <td class="content-block" style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0px; padding: 0px 0px 20px; width: 62.6459%;"><span style="color: #0f206c;">Tama&ntilde;o del Sistema(kW):</span> <em>${tamano}</em></td>
            <td class="content-block" style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0px; padding: 0px 0px 20px; width: 37.1595%;"><span style="color: #0f206c;">Precio del Sistema(USD):</span> <em>${precio}</em></td>
            </tr>
            <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
            <td class="content-block" style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0px; padding: 0px 0px 20px; width: 62.6459%;"><span style="color: #0f206c;">Nombre del vendedor:</span> <em>${nombre}</em></td>
            <td class="content-block" style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0px; padding: 0px 0px 20px; width: 37.1595%;">
            </tr>
            <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
            <td class="content-block" style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0px; padding: 0px 0px 20px; width: 62.6459%;">&nbsp;</td>
            <td class="content-block" style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0px; padding: 0px 0px 20px; width: 37.1595%;">&nbsp;</td>
            </tr>
            <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
            <td class="content-block" style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0px; padding: 0px 0px 20px; width: 62.6459%;"><a class="btn-primary" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; color: #fff; text-decoration: none; line-height: 2em; font-weight: bold; text-align: center; cursor: pointer; display: inline-block; border-radius: 5px; text-transform: capitalize; background-color: #0099ce; margin: 0; border-color: #0099ce; border-style: solid; border-width: 8px 16px;" href="mailto:${correo}?subject=GoSolar Request Credit Analysis|| ${nombre}">Responder</a></td>
            </tr>
            <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
            <td class="content-block" style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0px; padding: 0px 0px 20px; width: 62.6459%;">Copyright &copy; 2022 <strong>Real Time Consulting,</strong> All Rights Reserved.</td>
            </tr>
            </tbody>
            </table>
            </td>
            </tr>
            </tbody>
            </table>
            <div class="footer" style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; clear: both; color: #999999; margin: 0px; padding-top: 20px; padding-right: 20px; padding-bottom: 20px;">&nbsp;</div>
            </div>
            </td>
            <td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;">&nbsp;</td>
            </tr>
            </tbody>
            </table>
               `
            req.files.forEach(file => {
                paths.push({
                    filename: "Estado Financiero" + "file" + path.extname(file.originalname),
                    path: file.path
                })
            });
           

            sendEmail(paths)
                .then((result) =>{
                    console.log('Email is sent' + result)
            })
            .catch((error) =>{
            console.log('Ha sucedido algo: ' + error.message)
            });
            
        }
    });
})


app.listen(PORT, () =>{
    console.log("App is listening on PORT ", PORT)
})

async function sendEmail(paths){
    try{

        const transport = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
            user: 'zoho@gosolar.co.cr',
            pass: 'ztqkzgoxbxrjjhtt',
            },
        });


        // const mailOptions = {
        //     from: '"📧Solicitud de crédito📧"',
        //     to: test.correo,
        //     html: contentHTML,
        //     subject: 'Solicitud de Crédito',
        //     cc: "jartaviag.consultoria@gmail.com,achabria1@gmail.com,ejimenez@gosolar.co.cr,kaguero@gosolar.co.cr,fmendez@gosolar.co.cr",
        //     attachments: paths
        // };
        const mailOptions = {
            from: '"📧Solicitud de crédito📧"<zelayajeremy875@gmail.com>',
            to: 'zelayajeremy874@gmail.com',
            html: contentHTML,
            subject: 'Solicitud de Crédito',
            cc: "zelayajeremy875@gmail.com,zelayajeremy873@gmail.com",
            attachments: paths
        };


        const result = await transport.sendMail(mailOptions);

        return result;

    }catch(error){
        return error
    };
};