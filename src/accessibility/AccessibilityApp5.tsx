import React, { useEffect } from 'react';
import './style.css'

export default function AccessibilityApp() {

    useEffect(() => {

    }, [])
    return (
        <>
            <img src="https://mdn.github.io/learning-area/accessibility/html/dinosaur.png" />

            <img
                src="https://mdn.github.io/learning-area/accessibility/html/dinosaur.png"
                alt="这是第一张图片" />

            <img
                src="https://mdn.github.io/learning-area/accessibility/html/dinosaur.png"
                alt="这是第二张图片"
                title="The Mozilla red dinosaur" />

            <img src="https://mdn.github.io/learning-area/accessibility/html/dinosaur.png" aria-labelledby="dino-label" />

            <p id="dino-label">
                这是第三张图片
            </p>

            <figure>
                <img src="https://mdn.github.io/learning-area/accessibility/html/dinosaur.png" alt="The Mozilla Tyrannosaurus" />
                <figcaption>
                    A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a
                    human, with small arms, and a large head with lots of sharp teeth.
                </figcaption>
            </figure>

            <h3>
                <img src="https://mdn.github.io/learning-area/accessibility/html/article-icon.png" alt="" />
                Tyrannosaurus Rex: the king of the dinosaurs
            </h3>

        </>
    )
}

