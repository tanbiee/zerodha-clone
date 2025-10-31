import React from "react";
import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import Hero from "../landing_page/home/Hero";

//test suite for Hero component

describe('hero component', ()=>{
    test('render hero image', ()=>{
        render(<Hero />);
        const heroImage = screen.getByAltText("hero Image");
        expect(heroImage).toBeInTheDocument();
        
        expect(heroImage).toHaveAttribute('src', 'media/homeHero.png');
    });

    test('render signup button', ()=>{
        render(<Hero />);
        const signupButton = screen.getByRole("button",{name: /Signup for free/i});
        expect(signupButton).toBeInTheDocument();
        
        expect(signupButton).toHaveClass('btn-primary');
    });
});