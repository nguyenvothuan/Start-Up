import React from 'react'
import { ServicesCard, ServicesContainter, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper} from './ServicesElements'
import icon1 from '../../images/data.svg';
import icon2 from '../../images/payment.svg';
import icon3 from '../../images/certification.svg'
const Services = () => {
    return (
        <ServicesContainter id="services">
            <ServicesH1>
                Best Yasuo Gank Team 15mins gg
            </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={icon1} />
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>We help best yasuo gank team 15 minutes gg reduce your fees</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon2} />
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>We help reduce your fees</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon3} />
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>We help reduce your fees</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainter>
    )
}

export default Services 
