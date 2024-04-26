import { Button, Modal } from "@canonical/react-components";
import { useState } from "react";
import { useTranslations } from "@i18n/utils";
type SponsorLogoAndModalProps = {
    name: string,
    level: string,
    logoImageSrc: string,
    description: string,
    url: string,
    locale: string
}
export default function SponsorLogoAndModal(props: SponsorLogoAndModalProps) {
    const [modalOpen, setModalOpen] = useState(false);
    const closeHandler = () => setModalOpen(false);
    const t = useTranslations(props.locale);
    return (
        <>
            <img src={props.logoImageSrc} alt={props.name} onClick={() => setModalOpen(true)} />
            {modalOpen ? <Modal close={closeHandler} title={t('sponsor.about')} buttonRow={<>
                <Button appearance="positive" element="a" href={props.url} target="_blank">
                    {t('sponsor.website')}
                </Button>
            </>}>
                <img src={props.logoImageSrc} alt={props.name} />
                <h1>{props.name}</h1>
                <b>{props.level}</b>
                <p>
                    {props.description}
                </p>
            </Modal> : null}
        </>
    )
}