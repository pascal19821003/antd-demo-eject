import React, { useEffect } from 'react';
import './style8.css'

export default function AccessibilityApp() {

    useEffect(() => {
        var tabs = document.querySelectorAll(".info-box li a");
        var panels = document.querySelectorAll(".info-box article");

        for (let i = 0; i < tabs.length; i++) {
            var tab = tabs[i];
            setTabHandler(tab, i);
        }

        function setTabHandler(tab: any, tabPos: number) {
            tab.onclick = function () {
                for (let i = 0; i < tabs.length; i++) {
                    tabs[i].className = "";
                }

                tab.className = "active-tab";

                for (let i = 0; i < panels.length; i++) {
                    panels[i].className = "";
                }

                panels[tabPos].className = "active-panel";
            };
        }
    }, [])
    return (
        <>
            <section className="info-box">
                <ul>
                    <li><a href="#" className="active-tab">Tab 1</a></li>
                    <li><a href="#">Tab 2</a></li>
                    <li><a href="#">Tab 3</a></li>
                </ul>
                <div className="panels">
                    <article className="active-panel">
                        <h2>The first tab</h2>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Pellentesque turpis nibh, porttitor nec venenatis eu, pulvinar in
                            augue. Vestibulum et orci scelerisque, vulputate tellus quis,
                            lobortis dui. Vivamus varius libero at ipsum mattis efficitur ut nec
                            nisl. Nullam eget tincidunt metus. Donec ultrices, urna maximus
                            consequat aliquet, dui neque eleifend lorem, a auctor libero turpis
                            at sem. Aliquam ut porttitor urna. Nulla facilisi.
                        </p>
                    </article>
                    <article>
                        <h2>The second tab</h2>

                        <p>
                            This tab hasn't got any Lorem Ipsum in it. But the content isn't
                            very exciting all the same.
                        </p>
                    </article>
                    <article>
                        <h2>The third tab</h2>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Pellentesque turpis nibh, porttitor nec venenatis eu, pulvinar in
                            augue. And now an ordered list: how exciting!
                        </p>

                        <ol>
                            <li>dui neque eleifend lorem, a auctor libero turpis at sem.</li>
                            <li>Aliquam ut porttitor urna.</li>
                            <li>Nulla facilisi</li>
                        </ol>
                    </article>
                </div>
            </section>


        </>
    )
}

