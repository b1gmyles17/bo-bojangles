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
                    <a href="index.html" data-type="index-link">AiArt documentation</a>
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
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
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
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-19f48d2ab53d601d9d742ef0267cb15eed4d65f7d6523f2f19b4f5e275983f25ef67a780dd76c5a3fc1d674f6ce268be73416735330b1be6b6b71671dbec77f2"' : 'data-target="#xs-injectables-links-module-AppModule-19f48d2ab53d601d9d742ef0267cb15eed4d65f7d6523f2f19b4f5e275983f25ef67a780dd76c5a3fc1d674f6ce268be73416735330b1be6b6b71671dbec77f2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-19f48d2ab53d601d9d742ef0267cb15eed4d65f7d6523f2f19b4f5e275983f25ef67a780dd76c5a3fc1d674f6ce268be73416735330b1be6b6b71671dbec77f2"' :
                                        'id="xs-injectables-links-module-AppModule-19f48d2ab53d601d9d742ef0267cb15eed4d65f7d6523f2f19b4f5e275983f25ef67a780dd76c5a3fc1d674f6ce268be73416735330b1be6b6b71671dbec77f2"' }>
                                        <li class="link">
                                            <a href="injectables/BotGateway.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BotGateway</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CommandsModule.html" data-type="entity-link" >CommandsModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CommandsModule-72e7c1d51d036070f07e2b9764c04892e6e84cdfdc2d5a0d2d384a1aac6efa3d32f38f6ea040f01eb076f99f6527dc7cdf5b32c3502184cd0b858e31d5f451e9"' : 'data-target="#xs-injectables-links-module-CommandsModule-72e7c1d51d036070f07e2b9764c04892e6e84cdfdc2d5a0d2d384a1aac6efa3d32f38f6ea040f01eb076f99f6527dc7cdf5b32c3502184cd0b858e31d5f451e9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CommandsModule-72e7c1d51d036070f07e2b9764c04892e6e84cdfdc2d5a0d2d384a1aac6efa3d32f38f6ea040f01eb076f99f6527dc7cdf5b32c3502184cd0b858e31d5f451e9"' :
                                        'id="xs-injectables-links-module-CommandsModule-72e7c1d51d036070f07e2b9764c04892e6e84cdfdc2d5a0d2d384a1aac6efa3d32f38f6ea040f01eb076f99f6527dc7cdf5b32c3502184cd0b858e31d5f451e9"' }>
                                        <li class="link">
                                            <a href="injectables/CogView2Command.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CogView2Command</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DalleMiniCommand.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DalleMiniCommand</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/HelpCommand.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HelpCommand</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/OpenAiCommand.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OpenAiCommand</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EntityModule.html" data-type="entity-link" >EntityModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GatewayModule.html" data-type="entity-link" >GatewayModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-GatewayModule-82c5cc7a60029995d48128245e83b0aee50084b61ef72a268c0466fd1f9ec6e9515fae22506469a7f7f3a793cdcba64ed7aa28de9e2b2f0b481d78942e0473fd"' : 'data-target="#xs-injectables-links-module-GatewayModule-82c5cc7a60029995d48128245e83b0aee50084b61ef72a268c0466fd1f9ec6e9515fae22506469a7f7f3a793cdcba64ed7aa28de9e2b2f0b481d78942e0473fd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GatewayModule-82c5cc7a60029995d48128245e83b0aee50084b61ef72a268c0466fd1f9ec6e9515fae22506469a7f7f3a793cdcba64ed7aa28de9e2b2f0b481d78942e0473fd"' :
                                        'id="xs-injectables-links-module-GatewayModule-82c5cc7a60029995d48128245e83b0aee50084b61ef72a268c0466fd1f9ec6e9515fae22506469a7f7f3a793cdcba64ed7aa28de9e2b2f0b481d78942e0473fd"' }>
                                        <li class="link">
                                            <a href="injectables/BotGateway.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BotGateway</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/JobModule.html" data-type="entity-link" >JobModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-JobModule-a5f750337af610f04ab8f461d6345f494043ff70ac8a6c2b4dcbb8ee88b0d84ce5b681a0eb7910b97496bf495e886157a0a6d6aeb588849c82345d2f21c8ba19"' : 'data-target="#xs-injectables-links-module-JobModule-a5f750337af610f04ab8f461d6345f494043ff70ac8a6c2b4dcbb8ee88b0d84ce5b681a0eb7910b97496bf495e886157a0a6d6aeb588849c82345d2f21c8ba19"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-JobModule-a5f750337af610f04ab8f461d6345f494043ff70ac8a6c2b4dcbb8ee88b0d84ce5b681a0eb7910b97496bf495e886157a0a6d6aeb588849c82345d2f21c8ba19"' :
                                        'id="xs-injectables-links-module-JobModule-a5f750337af610f04ab8f461d6345f494043ff70ac8a6c2b4dcbb8ee88b0d84ce5b681a0eb7910b97496bf495e886157a0a6d6aeb588849c82345d2f21c8ba19"' }>
                                        <li class="link">
                                            <a href="injectables/JobService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ModelsModule.html" data-type="entity-link" >ModelsModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ModelsModule-004f3adb3e5a45e286b81f5e718c4f5f14b31ef31a979d20667832b39396e456140c471d6b43216514344a82432ef3cc3ee96ea0747f0140997570aafc589619"' : 'data-target="#xs-injectables-links-module-ModelsModule-004f3adb3e5a45e286b81f5e718c4f5f14b31ef31a979d20667832b39396e456140c471d6b43216514344a82432ef3cc3ee96ea0747f0140997570aafc589619"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ModelsModule-004f3adb3e5a45e286b81f5e718c4f5f14b31ef31a979d20667832b39396e456140c471d6b43216514344a82432ef3cc3ee96ea0747f0140997570aafc589619"' :
                                        'id="xs-injectables-links-module-ModelsModule-004f3adb3e5a45e286b81f5e718c4f5f14b31ef31a979d20667832b39396e456140c471d6b43216514344a82432ef3cc3ee96ea0747f0140997570aafc589619"' }>
                                        <li class="link">
                                            <a href="injectables/AiArtModel.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AiArtModel</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AiStoryModel.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AiStoryModel</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CogView2Model.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CogView2Model</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ServicesModule.html" data-type="entity-link" >ServicesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ServicesModule-4cc32e99181eb1cf39ea6a2b78a2f2ea6ad3f78c1ed7911508dc6468d6adf9ca3080a7b22fa6aa48e905556e82b2f785f71af00cd01740ac10542281155b79bc"' : 'data-target="#xs-injectables-links-module-ServicesModule-4cc32e99181eb1cf39ea6a2b78a2f2ea6ad3f78c1ed7911508dc6468d6adf9ca3080a7b22fa6aa48e905556e82b2f785f71af00cd01740ac10542281155b79bc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ServicesModule-4cc32e99181eb1cf39ea6a2b78a2f2ea6ad3f78c1ed7911508dc6468d6adf9ca3080a7b22fa6aa48e905556e82b2f785f71af00cd01740ac10542281155b79bc"' :
                                        'id="xs-injectables-links-module-ServicesModule-4cc32e99181eb1cf39ea6a2b78a2f2ea6ad3f78c1ed7911508dc6468d6adf9ca3080a7b22fa6aa48e905556e82b2f785f71af00cd01740ac10542281155b79bc"' }>
                                        <li class="link">
                                            <a href="injectables/AiStoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AiStoryService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AmqpService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AmqpService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CogView2Service.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CogView2Service</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DalleMiniService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DalleMiniService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/HelpService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HelpService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UtilitiesModule.html" data-type="entity-link" >UtilitiesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UtilitiesModule-d63c3f0e86295eb599b25f25d02892b5a2ef0d761a5e1c33146ec025af5cbe231df6de1cb265324e0552aa6409e786eabab07e101a9758153372dda716c7f51b"' : 'data-target="#xs-injectables-links-module-UtilitiesModule-d63c3f0e86295eb599b25f25d02892b5a2ef0d761a5e1c33146ec025af5cbe231df6de1cb265324e0552aa6409e786eabab07e101a9758153372dda716c7f51b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UtilitiesModule-d63c3f0e86295eb599b25f25d02892b5a2ef0d761a5e1c33146ec025af5cbe231df6de1cb265324e0552aa6409e786eabab07e101a9758153372dda716c7f51b"' :
                                        'id="xs-injectables-links-module-UtilitiesModule-d63c3f0e86295eb599b25f25d02892b5a2ef0d761a5e1c33146ec025af5cbe231df6de1cb265324e0552aa6409e786eabab07e101a9758153372dda716c7f51b"' }>
                                        <li class="link">
                                            <a href="injectables/Collage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Collage</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Job.html" data-type="entity-link" >Job</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AiArtCommand.html" data-type="entity-link" >AiArtCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/AiStoryCommand.html" data-type="entity-link" >AiStoryCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/CogView2CommandDto.html" data-type="entity-link" >CogView2CommandDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CogView2Response.html" data-type="entity-link" >CogView2Response</a>
                            </li>
                            <li class="link">
                                <a href="classes/CouldNotGenerateArtException.html" data-type="entity-link" >CouldNotGenerateArtException</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateJobInput.html" data-type="entity-link" >CreateJobInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/DalleMiniCommandDto.html" data-type="entity-link" >DalleMiniCommandDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/JobResolver.html" data-type="entity-link" >JobResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/MessageAttachmentWithDbRecord.html" data-type="entity-link" >MessageAttachmentWithDbRecord</a>
                            </li>
                            <li class="link">
                                <a href="classes/OpenAiCommandDto.html" data-type="entity-link" >OpenAiCommandDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateJobInput.html" data-type="entity-link" >UpdateJobInput</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/HelpInteractionCollector.html" data-type="entity-link" >HelpInteractionCollector</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AiStoryChoices.html" data-type="entity-link" >AiStoryChoices</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AiStoryRequest.html" data-type="entity-link" >AiStoryRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AiStoryResponse.html" data-type="entity-link" >AiStoryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICogView2Data.html" data-type="entity-link" >ICogView2Data</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICogView2Request.html" data-type="entity-link" >ICogView2Request</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICogView2Response.html" data-type="entity-link" >ICogView2Response</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICogView2ResponseAcknowledged.html" data-type="entity-link" >ICogView2ResponseAcknowledged</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICommandHelp.html" data-type="entity-link" >ICommandHelp</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICommandParameter.html" data-type="entity-link" >ICommandParameter</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});