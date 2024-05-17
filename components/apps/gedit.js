import React, { Component } from 'react';
import $ from 'jquery';
import ReactGA from 'react-ga4';
import emailjs from '@emailjs/browser';

export class Gedit extends Component {

    constructor() {
        super();
        this.state = {
            sending: false,
        }
    }

    componentDidMount() {
        // emailjs.init(process.env.NEXT_PUBLIC_USER_ID);
    }

    // sendMessage = async () => {
    //     let name = $("#sender-name").val();
    //     let subject = $("#sender-subject").val();
    //     let message = $("#sender-message").val();

    //     name = name.trim();
    //     subject = subject.trim();
    //     message = message.trim();

    //     let error = false;

    //     if (name.length === 0) {
    //         $("#sender-name").val('');
    //         $("#sender-name").attr("placeholder", "Name must not be Empty!");
    //         error = true;
    //     }

    //     if (message.length === 0) {
    //         $("#sender-message").val('');
    //         $("#sender-message").attr("placeholder", "Message must not be Empty!");
    //         error = true;
    //     }
    //     if (error) return;

    //     this.setState({ sending: true });

    //     const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
    //     const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    //     const templateParams = {
    //         'name': name,
    //         'subject': subject,
    //         'message': message,
    //     }

    //     emailjs.send(serviceID, templateID, templateParams).then(() => {
    //         this.setState({ sending: false });
    //         $("#close-gedit").trigger("click");
    //     }).catch(() => {
    //         this.setState({ sending: false });
    //         $("#close-gedit").trigger("click");
    //     })

    //     ReactGA.event({
    //         category: "Send Message",
    //         action: `${name}, ${subject}, ${message}`
    //     });

    // }

    render() {
        return (
            <div className="w-full h-full relative flex gap-5 p-5  bg-[#282c34] text-white select-none ">
                <a href="https://www.linkedin.com/in/zaheerh4ck3r/" className="flex flex-col h-max justify-center items-center" target="_blank">
                    <img src="/images/logos/linkedin.png" className="h-16 w-16"></img>
                    <span className="text-center">linkedin</span>
                </a>
                <a href="mailto:zaheerh4ck3r@gmail.com" className="flex flex-col h-max justify-center items-center" target="_blank">
                    <img src="/images/logos/email.png" className="h-16 w-16"></img>
                    <span>mail</span>
                </a>
            </div>
        )
    }
}

export default Gedit;

export const displayGedit = () => {
    return <Gedit></Gedit>;
}
