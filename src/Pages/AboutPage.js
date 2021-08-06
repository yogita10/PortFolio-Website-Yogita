import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Java'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'C/C++'} progress={'60%'} width={'60%'} /> 
                <SkillsSection skill={'Web Design'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'HTML'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'CSS'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Javascript'} progress={'60%'} width={'60%'} /> 
                <SkillsSection skill={'React Js'} progress={'50%'} width={'50%'} /> 
                <SkillsSection skill={'Node Js'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'Python'} progress={'40%'} width={'40%'} />
                
            </div>   

            <Tittle title={'Services'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Web design'} 
                text={'I am a web developer, who loves to develop websites. '}
                />
                {/* <ServicesSection image={intelligence} title={'Artificial Intelligence'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                /> */}
                {/* <ServicesSection image={gamedev} title={'Game Development'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                /> */}

                
            </div>

        </div>
    )
}

export default AboutPage;
