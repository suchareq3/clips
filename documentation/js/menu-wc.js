'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">clips documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-cd84d0936b5213f33502e91e2a60bd46c08bc12acc75e719a149d5e92ff17c5ddf2c30385cfbb64f54732cb492eda36f63cdd0efd21c37ebb8fe63c4c3269b99"' : 'data-bs-target="#xs-components-links-module-AppModule-cd84d0936b5213f33502e91e2a60bd46c08bc12acc75e719a149d5e92ff17c5ddf2c30385cfbb64f54732cb492eda36f63cdd0efd21c37ebb8fe63c4c3269b99"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-cd84d0936b5213f33502e91e2a60bd46c08bc12acc75e719a149d5e92ff17c5ddf2c30385cfbb64f54732cb492eda36f63cdd0efd21c37ebb8fe63c4c3269b99"' :
                                            'id="xs-components-links-module-AppModule-cd84d0936b5213f33502e91e2a60bd46c08bc12acc75e719a149d5e92ff17c5ddf2c30385cfbb64f54732cb492eda36f63cdd0efd21c37ebb8fe63c4c3269b99"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SharedModule-c0244283bd7674db161128e3d7e5729750285e5136756b81f5de979803417e25624688aa13b7ce4c926de9dec58b77e32bfb292904fed76099cad5c6f6772467"' : 'data-bs-target="#xs-components-links-module-SharedModule-c0244283bd7674db161128e3d7e5729750285e5136756b81f5de979803417e25624688aa13b7ce4c926de9dec58b77e32bfb292904fed76099cad5c6f6772467"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-c0244283bd7674db161128e3d7e5729750285e5136756b81f5de979803417e25624688aa13b7ce4c926de9dec58b77e32bfb292904fed76099cad5c6f6772467"' :
                                            'id="xs-components-links-module-SharedModule-c0244283bd7674db161128e3d7e5729750285e5136756b81f5de979803417e25624688aa13b7ce4c926de9dec58b77e32bfb292904fed76099cad5c6f6772467"' }>
                                            <li class="link">
                                                <a href="components/ModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TabComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TabComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TabsContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TabsContainerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-UserModule-ac8ed983ef2c0dc17891b3d2ad92e084882a6ef3d63fd91a83f7b895f22d28be43474253ae8feb9bf2140a3d46f41e83e8639321bb5b832eef347af0ac9b007b"' : 'data-bs-target="#xs-components-links-module-UserModule-ac8ed983ef2c0dc17891b3d2ad92e084882a6ef3d63fd91a83f7b895f22d28be43474253ae8feb9bf2140a3d46f41e83e8639321bb5b832eef347af0ac9b007b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-ac8ed983ef2c0dc17891b3d2ad92e084882a6ef3d63fd91a83f7b895f22d28be43474253ae8feb9bf2140a3d46f41e83e8639321bb5b832eef347af0ac9b007b"' :
                                            'id="xs-components-links-module-UserModule-ac8ed983ef2c0dc17891b3d2ad92e084882a6ef3d63fd91a83f7b895f22d28be43474253ae8feb9bf2140a3d46f41e83e8639321bb5b832eef347af0ac9b007b"' }>
                                            <li class="link">
                                                <a href="components/AuthModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ModalService.html" data-type="entity-link" >ModalService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IModal.html" data-type="entity-link" >IModal</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});