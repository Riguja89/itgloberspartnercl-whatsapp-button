import React from 'react';
import PropTypes from 'prop-types';

type Props = {
    logo: string
    phone: string
    message: string
    width: number
    height: number
}

const WhatsappButton = ({ logo, phone, message, width, height }: Props) => {
    const formattedMessage = message.replace(/ /g, "%20")
    console.log("mi mensaje formateado es, ", formattedMessage, logo)
    return <>
        <div className='fixed bottom-2 right-2 flexColumn'>
            <a href={`https://wa.me/${phone}?text=${formattedMessage}`}
                target='blanck'
                rel="noreferrer noopener">
                <img 
                src={logo} 
                width={width} 
                height={height} 
                alt="logo de whatsaap" />
            </a>
        </div>
    </>
}

WhatsappButton.propTypes = {
    logo: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    message: PropTypes.string,
    width:PropTypes.number,
    height:PropTypes.number,
}

WhatsappButton.defaultProps = {
    logo: "",
    phone: "3173395428",
    message: "Estas comunicandote con Brahma, deja tu duda",
    width:80,
    height:80,
}

WhatsappButton.schema = {
    title: "Boton de whatsaap",
    type: "object",
    properties: {
        logo: {
            title: "Logo de whatsap que se relacione con la marca",
            type: "string",
            widget: {
                "ui:widget": "image-uploader"
            }
        },
        phone: {
            title: "Telefono",
            description: "Agrga por favor un telefono",
            type: "string"
        },
        message: {
            title: "Mensaje",
            description: "Agrga por favor el mensaje que se verá para tu cliente",
            type: "string",
            widget: {
                "ui:widget": "textarea"
            }
        },
        width: {
            title: "width",
            description: "Agrga por el ancho del logo",
            type: "number"
        },
        height: {
            title: "Heigh",
            description: "Agrga por el alto del logo",
            type: "number"
        },
    }
}

export default WhatsappButton