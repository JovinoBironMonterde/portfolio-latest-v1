"use client";
import React, { useEffect } from 'react';

function RevealAnimation() {
  useEffect(() => {
    function reveal() {
      var reveals = document.querySelectorAll('.reveal');

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        } else {
          reveals[i].classList.remove('active');
        }
      }
    }

    window.addEventListener('scroll', reveal);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', reveal);
    };
  }, []);

  return null;
}

export default RevealAnimation;