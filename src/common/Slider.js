import React from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import HiwBanner from './../images/hiw_banner.webp';
import One from './../images/1.png';
import Two from './../images/2.png';
import Three from './../images/3.png';
import Four from './../images/4.png';
import Five from './../images/5.png';
import Six from './../images/6.png';
import ImageCard from './ImageCard';
import { Form } from 'react-bootstrap';

export default function Slider() {
    return (
        <OwlCarousel items={3} margin={8} autoplay ={true} loop> 
            <ImageCard src= {One} title="Loose Weight" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
            <ImageCard src= {Two} title="Loose Weight" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
            <ImageCard src= {Three} title="Loose Weight" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
            <ImageCard src= {Four} title="Loose Weight" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
            <ImageCard src= {Five} title="Loose Weight" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
            <ImageCard src= {Six} title="Loose Weight" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
        </OwlCarousel>  
    )
}
