import sendgrid from '@sendgrid/mail';
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function sendEmail(req, res) {
    // console.log(req.body);
    // try {
    //     await sendgrid.send({
    //         to: 'johnathontrisler@gmail.com',
    //         from: 'johnathontrisler@gmail.com',
    //         subject: 'New message from your website!',
    //         text: `From ${req.body.name}`,
    //         html: `
    //             <div>
    //                 <h1>You received a new message from your website!</h1>
    //                 <h2>Here is the message...</h2>
    //                 <p>${req.body.message}</p>
    //                 <br/>
    //                 <h3>Reply Email: ${req.body.email}</h3>
    //             </div>
    //         `
    //     });
    // }
    // catch (err) {
    //     console.error(err);
    //     return res.status(err.statusCode || 500).json({ error: err.message });
    // }

    return res.status(200).json({ error: '' });
}