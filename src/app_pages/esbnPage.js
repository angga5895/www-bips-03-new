import React, { memo } from 'react';
import { AppFrameAction } from '../appframe.js';
import {AppFrame, AppFrameProvider, AppModal} from "../appframe";
import { BIPSAppContext } from '../AppData.js';
import { ContextConnector } from '../appcontext.js';
import FillHeaderTab from "../tabheaderfill";
import { WSConnectionAction } from "./../appnetwork";
import $ from 'jquery';
import {Dropdown, Input} from "semantic-ui-react";
import VerifyPIN from "./verifyPin";
import {widthSize} from "./mainPage.js";
import {AgGridReact} from "ag-grid-react";
import Select from "react-select";
import ModalSbnCodeDetail from "../app_modals/modal_esbncode_detail";
import ModalRedeemEsbn from "../app_modals/modal_esbnredeem";
import ModalHistoEsbn from "../app_modals/modal_historicalesbn_detail";

window.$ = window.jQuery = $;

const sbnnoOptions = [
    //untuk top active
    { key: 'sbn1', value: 'testsbn1', text: 'TESTSBN1' },
    { key: 'sbn2', value: 'testsbn2', text: 'TESTSBN2' },
    { key: 'sbn3', value: 'testsbn3', text: 'TESTSBN3' },
];

const statussbnOptions = [
    //untuk top active
    { key: 'paid', value: 'paid', text: 'PAID' },
    { key: 'unpaid', value: 'unpaid', text: 'UNPAID' },
    { key: 'completed', value: 'completed', text: 'COMPLETED ORDER' },
    { key: 'verified', value: 'verified', text: 'VERIFIED ORDER' },
];

const EsbnFrameHeader = memo((props) => {
    return (
        <>
        </>
    );
})

class Esbn extends React.PureComponent {

    render() {
        return (
            //hanya memanggil headernya saja
            <div className="bg-black-trading px-0 mx-0">
            </div>
        );
    }
}

const CustomFrameHeaderEsbn_Base = memo((props) => {
    return (
        <div>
            {/*<BIPSAppProvider>*/}
            <WSConnectionAction />
            <div className={props.checkStatusEsbn === 3 ? 'd-none' : 'd-block'}>
                <div className="row col-sm-12 px-0 mx-0 align-self-center">
                    <div className="col-sm-12 px-0 mx-0 d-border-bottom">
                        <FillHeaderTab esbnMode="beforeregister" treeName="/esbnPage" linkTitles={
                            {
                                EsbnPage: 'REGISTER TO SBN',
                            }
                        } />
                    </div>
                </div>
            </div>
            <div className={props.checkStatusEsbn === 0 || props.checkStatusEsbn === 1 || props.checkStatusEsbn === 2 ? 'd-none' : 'd-block'}>
                <div className="row col-sm-12 px-0 mx-0 align-self-center">
                    <div className="col-sm-12 px-0 mx-0 d-border-bottom">
                        <FillHeaderTab esbnMode="afterregister" treeName="/esbnPage" linkTitles={
                            {
                                EsbnxPageTransaction: 'TRANSACTION',
                                EsbnxPagePortfolio: 'PORTFOLIO',
                                /*EsbnxPageHistorical: 'HISTORICAL ESBN',*/
                            }
                        } />
                    </div>
                </div>
            </div>
            <AppFrame treeName="/esbnPage" headerComponent={EsbnFrameHeader} />
        </div>
    );
})

const TransactionSBN_Base = (props) => {
    return (
        <div>
            {/*<BIPSAppProvider>*/}
            <WSConnectionAction />
            <div className="row col-sm-12 px-0 mx-0 align-self-center">
                <div className="col-sm-8 px-0 mx-0 d-border-bottom">
                    <FillHeaderTab esbnMode="afterregister" treeName="/esbnPage/EsbnxPageTransaction" linkTitles={
                        {
                            EsbnTransSubscribe: 'SUBSCRIBE SBN',
                            EsbnTransHistorical: 'HISTORICAL ORDER',
                        }
                    } />
                </div>
            </div>
            <AppFrame treeName="/esbnPage/EsbnxPageTransaction" headerComponent={EsbnFrameHeader} />
        </div>
    );
}

class PINVerify extends React.PureComponent {

    render() {
        return (
            <>
                <AppFrameAction ref="frameAction" />
                <VerifyPIN tipe = 'esbnregister'/>
            </>
        );
    }
}

class EsbnPage_Base extends React.PureComponent{
    constructor(props) {
        super(props);
    }

    buttonClickPIN = (e) => {
        if($("#declare").prop("checked") == true){
            var frameAction = this.refs.frameAction;
            frameAction.showModal({
                headerClass: () => <div className="text-right">
                </div>,
                contentClass: PINVerify,
                onClose: (result) => console.log('Second modal result = ', result),
                size: "mini",
            });
            // console.log(this.props.updateStatusEsbn(true));
            // frameAction.switchPage("EsbnxPagePortfolio","/esbnPage");
        } else {
            $("#content-alertdeclare").text("Please Check Declare ");
            $("#alert-declare").removeClass("fade-out");
            $("#alert-declare").addClass("fade-in");
        }
    }

    onClickCloseAlertDeclare = (e) => {
        $("#alert-declare").removeClass("fade-in");
        $("#alert-declare").addClass("fade-out");
    };

    render() {
        return (
            <>
                <AppFrameAction ref="frameAction" />
                <div id="alert-declare" className={"col-sm-2 text-center fade-out f-12"} style={{ position : "absolute", zIndex : 1, background: "brown", bottom: "35px", left: "35px" }}>
                    <div className={/*{cssmode == 'night'? */"px-2 pt-2 text-right text-white" /*: "px-2 pt-2 text-right text-black"*/}><i className="click-pointer icofont icofont-close" onClick={this.onClickCloseAlertDeclare}></i></div>
                    <div id="content-alertdeclare" className={"px-2 py-4 text-white"}></div>
                </div>
                <div>
                {/*<div className="card-header header-pegadaian bg-grey">
                    <div className="row col-sm-12 px-0 mx-0 py-3">
                        <div className="col-sm-10 px-0 mx-0 f-14 align-self-center"></div>
                        <div className="col-sm-2 text-right font-weight-bold px-0 mx-0">
                            <i className="f-18 ion ion-md-sync click-pointer"></i>
                        </div>
                    </div>
                </div>
                <div className="card-body align-self-center text-center f-16 py-5">
                    <div className="py-5">
                        <div className="py-5">
                            <i className="icofont icofont-warning-alt f-18"></i>
                            <p>E-SBN</p>
                            <p>Not yet available. <br/>Please contact our customer service.</p>
                        </div>
                    </div>
                </div>*/}

                <div className="col-sm-12 px-4 pb-0 bg-grey bg-black-trading pt-0 d-border card-527">
                    <div className='d-block f-12'>
                        <div id="exTab" className="container-fluid mx-0" style={{ paddingTop : "10px" }}>
                            <div className="row mb-2">
                                <div className={"col-sm-12 px-0"}>
                                    <ul className="nav nav-pills">
                                        <li>
                                            <a href="#1b" data-toggle="tab">CUSTOMER DATA</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content clearfix">
                                        <div className="tab-pane active py-2" id="1b">
                                            <div className={"row"}>
                                                <div className={"col-sm-6"}>
                                                    <table width="100%" className={"table table-bordered table-responsive mb-0 card-169"}>
                                                        <tr>
                                                            <td className={"d-border text-right"}>SID :</td>
                                                            <td width="50%" className={"even-td d-border hover-tables"} >IDD13823223984</td>
                                                        </tr>
                                                        <tr>
                                                            <td className={"d-border text-right"}>Email :</td>
                                                            <td width="50%" className={"d-border hover-tables"}>cattleyatrieananda@gmail.com</td>
                                                        </tr>
                                                        <tr>
                                                            <td className={"d-border text-right"}>Name :</td>
                                                            <td width="50%" className={"even-td d-border hover-tables"}>Fatchul Nimah</td>
                                                        </tr>
                                                        <tr>
                                                            <td className={"d-border text-right"}>ID No :</td>
                                                            <td width="50%" className={"d-border hover-tables"} >33181489395734</td>
                                                        </tr>
                                                        <tr>
                                                            <td className={"d-border text-right"}>Birth Date :</td>
                                                            <td width="50%" className={"even-td d-border hover-tables"}>Surabaya</td>

                                                        </tr>
                                                        <tr>
                                                            <td className={"d-border text-right"}>Place Of Birth :</td>
                                                            <td width="50%" className={"d-border hover-tables"}>20-Okt-1990</td>
                                                        </tr>
                                                    </table>
                                                </div>
                                                <div className={"col-sm-6"}>
                                                    <table width="100%" className={"table table-bordered table-responsive mb-0 card-169"}>

                                                        <tr>
                                                            <td width="50%" className={"d-border text-right"} >Occupation :</td>
                                                            <td width="50%" className={"even-td d-border hover-tables"}>Pegawai Swasta</td>
                                                        </tr>
                                                        <tr>
                                                            <td className={"d-border text-right"}>Address :</td>
                                                            <td width="50%" className={"d-border hover-tables"}>Jl. Siliwangi No. 50</td>
                                                        </tr>
                                                        <tr>
                                                            <td className={"d-border text-right"}>City :</td>
                                                            <td width="50%" className={"even-td d-border hover-tables"}>Kota Bandung</td>
                                                        </tr>
                                                        <tr>
                                                            <td className={"d-border text-right"}>HP No :</td>
                                                            <td width="50%" className={"d-border hover-tables"}>08211534826</td>
                                                        </tr>
                                                        <tr>
                                                            <td className={"d-border text-right"}>Phone Number :</td>
                                                            <td width="50%" className={"even-td d-border hover-tables"}>-</td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="row mb-2">
                                <div className={"col-sm-6 pl-0"}>
                                    <ul className="nav nav-pills">
                                        <li>
                                            <a href="#2b" data-toggle="tab">ACCOUNT DATA</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content clearfix">
                                        <div className="tab-pane active py-2" id="2b">
                                            <table width="100%" className={"table table-bordered table-responsive mb-0 card-92"}>
                                                <tr>
                                                    <td className={"d-border text-right"}>Account Name :</td>
                                                    <td width="50%" className={"even-td d-border hover-tables"} >FATCHUL NIMAH</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>Account No :</td>
                                                    <td width="50%" className={"d-border hover-tables"}>90199314836</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>Bank :</td>
                                                    <td width="50%" className={"even-td d-border hover-tables"}>PT. BANK MANDIRI</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className={"col-sm-6 pr-0"}>
                                    <ul className="nav nav-pills">
                                        <li>
                                            <a href="#3b" data-toggle="tab">SB ACCOUNT DATA</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content clearfix">
                                        <div className="tab-pane active py-2" id="3b">
                                            <table width="100%" className={"table table-bordered table-responsive mb-0 card-92"}>
                                                <tr>
                                                    <td className={"d-border text-right"}>SB Account Name :</td>
                                                    <td width="50%" className={"even-td d-border hover-tables"} >FATCHUL NIMAH</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>SB Account No :</td>
                                                    <td width="50%" className={"d-border hover-tables"}>DX13247239472</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={"row"}>
                                <div className="col-sm-12 px-0">

                                    <div className="tab-content clearfix">
                                        <div className="tab-pane active py-2" id="4b">
                                            <div className={"col-sm-12 mt-4 card-76"}>
                                                <input className="magic-checkbox" type="checkbox" name="declare"
                                                       id="declare" value="option"/>
                                                <label htmlFor="declare"
                                                       className="text-white f-12-center">
                                                    I declare that I have :
                                                </label>
                                                <ol className={"mb-0"}>
                                                    <li className="text-white">Fill in the data correctly and completely.</li>
                                                    <li className="text-white">Understand and agree to the terms and conditions for using the Retail SBN transaction service system electronically.</li>
                                                </ol>
                                                <div className={"col-sm-12 text-right mb-0 px-3 h-40"}>
                                                    <button id="btn-sbmt" onClick={this.buttonClickPIN} className={"btn btn-primary"}><i className={"fa fa-paper-plane"}>&nbsp;Submit</i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }

}

class PortfolioEsbn_Base extends React.PureComponent{
    constructor(props) {
        super(props);
    }

    selectSelectionTab = theme => ({
        ...theme,
        borderRadius: 5,
        colors: {
            ...theme.colors,
            neutral0: this.props.thememode === true ? '#3D3E3F' : '#CDCDCE',
            neutral20: this.props.thememode === true ? '#333332' : '#E9E9E9',
            neutral30: this.props.thememode === true ? '#333332' : '#E9E9E9',
            neutral40: this.props.thememode === true ? '#1A1A1A' : '#1A1A1A',
            neutral80: this.props.thememode === true ? '#FFFFFF' : '#878787',
            primary75: this.props.thememode === true ? '#FFFFFF' : '#FFFFFF',
            primary50: this.props.thememode === true ? '#4D4D4E' : '#4D4D4E',
            primary25: this.props.thememode === true ? '#202020' : '#ece9ea',
            primary: '#0071BC',
        },
    });

    closeClick = (e) => {
        this.refs.frameAction.closeModal(100);
    }

    buttonClickSbnCode = (e) => {
        this.refs.frameAction.showModal({
            headerClass: () =>
                <div style={{ borderBottom:"1px solid white" }}>
                    <div className="row py-2">
                        <div className="col-sm-6">
                            <h5 id="sbncodetitle" className="font-weight-bold">SBN CODE</h5>
                        </div>
                        <div className="col-sm-6 text-right">
                            <i className="icofont icofont-close text-icofont-close text-white click-pointer" onClick={this.closeClick}></i>
                        </div>
                    </div>
                </div>,
            size: 'large',
            contentClass: SbnCodeDetailModal,
            onClose: (result) => {console.log('Modal 1 result = ', result)}
        })
    }

    buttonClickSbnRedeem = (e) => {
        this.refs.frameAction.showModal({
            headerClass: () =>
                <div style={{ borderBottom:"1px solid white" }}>
                    <div className="row py-2">
                        <div className="col-sm-6">
                            <h5 className="font-weight-bold">EARLY REDEMPTION</h5>
                            <i className="f-11">Please recheck your data before going forward to the next step</i>
                        </div>
                        <div className="col-sm-6 text-right">
                            <i className="icofont icofont-close text-icofont-close text-white click-pointer" onClick={this.closeClick}></i>
                        </div>
                    </div>
                </div>,
            size: 'large',
            contentClass: SbnRedeemModal,
            onClose: (result) => {console.log('Modal 1 result = ', result)}
        })
    }

    render() {
        const esbnOptions = [
            { value:'testsbn1', sbncode: 'TESTESBN1', coupondate: 'date 5 every month ' },
            { value:'testsbn2', sbncode: 'TESTESBN2', coupondate: 'date 7 every month ' },
        ];

        const customStyles = {
            control: (base, state) => ({
                ...base,
                // match with the menu
                borderRadius: 0,
                border: "var(--warna-d-border) 1px solid"
            }),
            menu: base => ({
                ...base,
                // override border radius to match the box
                borderRadius: 0,
            }),
            menuList: base => ({
                ...base,
                // override border radius to match the box
                borderRadius: 0
            })
        };

        //Add your search logic here.
        const customFilter  = (option, searchText) => {
            var sbncode = option.data.sbncode.toLowerCase().includes(searchText.toLowerCase());
            var coupondate = option.data.coupondate.toLowerCase().includes(searchText.toLowerCase());

            if(searchText.toLowerCase().includes(' ')){
                if(coupondate){
                    return true;
                }
            } else {
                if (sbncode) {
                    return true;
                }
            }
        };

        return (
            <>
                <AppFrameAction ref="frameAction"/>
                <div className="card-header header-pegadaian bg-grey py-2 f-12">
                    <div className="row col-sm-12 px-0 mx-0 py-1">
                        <div className="col-sm-10 px-0 mx-0 f-14 align-self-center"></div>
                        <div className="col-sm-2 text-right font-weight-bold px-0 mx-0">
                            <Select
                                getOptionLabel={(option) => `${option.sbncode} - ${option.coupondate}`}
                                filterOption={customFilter}
                                isSearchable={true}
                                maxMenuHeight={155}
                                styles={customStyles}
                                placeholder={<div>Search..</div>}
                                options={esbnOptions}
                                className="stockPageSelect text-left"
                                theme={this.selectSelectionTab}
                            />
                        </div>
                    </div>
                </div>
                <div className="card-body align-self-center text-center f-16">
                    {/*<i className="icofont icofont-warning-alt f-18"></i>*/}
                    <TablePorfolioEsbn clicksbncode={this.buttonClickSbnCode} clicksbnredeem={this.buttonClickSbnRedeem} size={widthSize()} gridView="tab" classView="f-12"/>
                </div>
            </>
        );
    }

}

class TransactionEsbn_Base extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state={
            activeTab: '1',
        }
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        const paddingParagraph = {
            paddingTop: '10px'
        }

        return (
            <>
                <AppFrameAction ref="frameAction" />
                <div className="container-fluid px-1 f-12" >
                    <div className="col-sm-12 px-0" style={paddingParagraph}>
                        <TransactionSBN />
                        {/*<div className="cssmenu col-sm-8 mx-0 px-0 h-45">
                            <ul className={"d-border-top d-border-left d-border-right"}>
                                <li className={ this.state.activeTab === '1' ? 'd-border-right active click-pointer col-sm-6 px-0 mx-0 f-12 text-center' : 'd-border-right text-white click-pointer col-sm-6 px-0 mx-0 f-12 text-center' } onClick={() => { this.toggle('1'); }}><a><span className="f-11">&nbsp; Subscribe SBN</span></a></li>
                                <li className={ this.state.activeTab === '2' ? 'd-border-right active click-pointer col-sm-6 px-0 mx-0 f-12 text-center' : 'd-border-right text-white click-pointer col-sm-6 px-0 mx-0 f-12 text-center' } onClick={() => { this.toggle('2'); }}><a><span className="f-11">&nbsp; Historical Order</span></a></li>
                            </ul>
                        </div>
                        <div className="col-sm-12 px-0 py-0 mx-0 my-0 bg-grey bg-black-trading d-border card-472">
                            <div className={this.state.activeTab === '1' ? 'd-block f-12' : 'd-none'}>
                                <div className="container-fluid mx-0 px-0 my-0 mx-0 py-0" style={{ paddingTop : "10px" }}>

                                </div>
                            </div>

                            <div className={this.state.activeTab === '2' ? 'd-block f-12' : 'd-none'}>
                                <div className="container-fluid mx-0 px-0 my-0 mx-0 py-0" style={{ paddingTop : "10px" }}>

                                </div>
                            </div>
                        </div>*/}
                    </div>
                </div>

            </>
        );
    }

}

class SubscribeEsbn extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            rowSBN : [{
                esbncode:'TESTSBN1',
                couponrate:'5.00%',
                offeringperiod:'23 MAR 2023',
                endofperiod:'30 DES 2023',
                denomination:'5.000.000',
                minsubs:'1.000.000',
                maxsubs:'1.000.000.000.000',
                coupondate:'12/12/2021',
                earlyredemption:'2.000.000',
                redeemperiod:'23/10/2021 ~ 23/11/2021',
                redeempaymentdate:'01 DES 2021',
                minredeem:'1.000.000',
                maxredeem:'80',
                couponfreq:'3,5',
                tradeability:'YES',
                memos : 'https://www.nnmaa.com'
            },{
                esbncode:'TESTSBN2',
                couponrate:'7.50%',
                offeringperiod:'30 DES 2021',
                endofperiod:'10 DES 2023',
                denomination:'2.000.000',
                minsubs:'1.000.000',
                maxsubs:'3.000.000.000.000',
                coupondate:'01/12/2021',
                earlyredemption:'2.000.000',
                redeemperiod:'10/10/2021 ~ 11/11/2021',
                redeempaymentdate:'01 JAN 2022',
                minredeem:'1.000.000',
                maxredeem:'55',
                couponfreq:'5,5',
                tradeability:'NO',
                memos : ''
            },{
                esbncode:'TESTSBN3',
                couponrate:'10.00%',
                offeringperiod:'17 NOV 2023',
                endofperiod:'27 JAN 2025',
                denomination:'2.500.000',
                minsubs:'1.000.000',
                maxsubs:'2.000.000.000.000',
                coupondate:'11/10/2021',
                earlyredemption:'3.000.000',
                redeemperiod:'17/10/2021 ~ 17/11/2021',
                redeempaymentdate:'05 AUG 2022',
                minredeem:'2.000.000',
                maxredeem:'95',
                couponfreq:'4,5',
                tradeability:'NO',
                memos : 'https://www.nnmaa.com'
            }],
            toggleSubs : false,
            sbncodeSubs : ''
        };
    }

    clickBackSbnSubs = () => {
        this.setState({
            toggleSubs : false,
            sbncodeSubs : ''
        });
    };

    render() {
        return (
            <>
                <div className="card-header header-pegadaian bg-grey">
                    <div className="row col-sm-12 px-0 mx-0 py-3">
                        <div className="col-sm-10 px-0 mx-0 f-14 align-self-center"></div>
                        <div className="col-sm-2 text-right font-weight-bold px-0 mx-0">
                            <i className="f-18 ion ion-md-sync click-pointer"></i>
                        </div>
                    </div>
                </div>
                <div className="card-406 align-self-center f-12 py-2 px-2 bg-trading-gray text-white" style={{ overflowY: "scroll" }}>
                    <div className={this.state.toggleSubs ? "d-none panel-group" : "d-block panel-group"} id="accordion">
                        {
                            this.state.rowSBN.map((data, index) => (
                                    <div key={index} className="panel panel-default">
                                        <div className="panel-heading bg-black-trading text-white click-pointer"
                                             data-toggle="collapse" data-parent="#accordion" href={"#collapse"+index}>
                                            <h4 className="panel-title">
                                                {data.esbncode}
                                            </h4>
                                        </div>
                                        <div id={"collapse"+index} className={index === 0 ? "panel-collapse collapse in" : "panel-collapse collapse"}>
                                            <div className="panel-body bg-trading-gray ">
                                                <div className={"row"}>
                                                    <div className={"col-sm-6"}>
                                                        <table width="100%" className={"table table-bordered table-responsive mb-0 card-169"}>
                                                            <tr>
                                                                <td className={"d-border text-right"}>Coupon Rate :</td>
                                                                <td width="50%" className={"even-td d-border hover-tables"} >{data.couponrate}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className={"d-border text-right"}>Offering Period :</td>
                                                                <td width="50%" className={"d-border hover-tables"}>{data.offeringperiod}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className={"d-border text-right"}>End Of Period :</td>
                                                                <td width="50%" className={"even-td d-border hover-tables"}>{data.endofperiod}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className={"d-border text-right"}>Denomination (IDR) :</td>
                                                                <td width="50%" className={"d-border hover-tables"} >{data.denomination}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className={"d-border text-right"}>Min. Subscribtion (IDR) :</td>
                                                                <td width="50%" className={"even-td d-border hover-tables"}>{data.minsubs}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className={"d-border text-right"}>Max. Subscribtion (IDR) :</td>
                                                                <td width="50%" className={"d-border hover-tables"}>{data.maxsubs}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className={"d-border text-right"}>Coupon Date :</td>
                                                                <td width="50%" className={"even-td d-border hover-tables"}>{data.coupondate}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className={"d-border text-right"}>Early Redemption :</td>
                                                                <td width="50%" className={"d-border hover-tables"}>{data.earlyredemption}</td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <div className={"col-sm-6"}>
                                                        <table width="100%" className={"table table-bordered table-responsive mb-0 card-169"}>

                                                            <tr>
                                                                <td width="50%" className={"d-border"} colSpan={2}>EARLY REDEMPTION</td>
                                                            </tr>
                                                            <tr>
                                                                <td className={"d-border text-right"}>Redeem Period :</td>
                                                                <td width="50%" className={"d-border hover-tables"}>{data.redeemperiod}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className={"d-border text-right"}>Redeem Payment Date :</td>
                                                                <td width="50%" className={"even-td d-border hover-tables"}>{data.redeempaymentdate}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className={"d-border text-right"}>Min. Redeem (IDR) :</td>
                                                                <td width="50%" className={"d-border hover-tables"}>{data.minredeem}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className={"d-border text-right"}>Max. Redeem (%) :</td>
                                                                <td width="50%" className={"even-td d-border hover-tables"}>{data.maxredeem}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className={"d-border text-right"}>Coupon Freq :</td>
                                                                <td width="50%" className={"d-border hover-tables"}>{data.couponfreq}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className={"d-border text-right"}>Tradeability :</td>
                                                                <td width="50%" className={"even-td d-border hover-tables"}>{data.tradeability}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className={"d-border text-right"}>Memo :</td>
                                                                <td width="50%" className={"d-border hover-tables"}>{data.memos !== '' ? <a href={data.memos} target="_blank"><i className="fa fa-link"></i> Memo</a> : '-'}</td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div className={"row py-3"}>
                                                    <div className="col-sm-12">
                                                        <button className="btn btn-primary w-100" onClick={() => {
                                                            this.setState({
                                                                toggleSubs : true,
                                                                sbncodeSubs : data.esbncode
                                                            });
                                                            $("#codeesbnget1").text(data.esbncode);
                                                            $("#codeesbnget2").text(data.esbncode);
                                                            $("#codeesbnget3").text(data.esbncode);
                                                        }}><i className="fa fa-shopping-cart"></i> SUBSCRIBE</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )
                        }
                    </div>
                    <div className={this.state.toggleSubs ? 'd-block' : 'd-none'}>
                        <SBNSubscribeBuy clicksubsback={this.clickBackSbnSubs} getsbncodesub={this.state.sbncodeSubs}/>
                    </div>
                </div>
            </>
        );
    }
}

class SBNSubscribeBuy_Base extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            active1:true,
            active2:false,
            active3:false,
            activeTab:1,
            next2:false,
            next3:false,
            nextcheck2:false,
            checkform:false,
            checkconfirmation:false,
            inputamountsubs : '',
            form: { message: "" }
        }
    };

    onClickCloseAlertDeclareSubs = (e) => {
        $("#alert-declaresubs").removeClass("fade-in");
        $("#alert-declaresubs").addClass("fade-out");
    };

    clickSubsAlert = (e) => {
        this.refs.frameAction.showModal({
            headerClass: () => <div className="text-white text-center"><h3 className="text-center pt-1">Term and Condition Order e-SBN</h3></div>,
            size: 'mini',
            contentClass: ModalAlertSubs,
            onClose: (result) => {console.log('Modal 1 result = ', result)}
        })
    }

    clickPinAlert = (e) => {
        this.refs.frameAction.showModal({
            headerClass: () => <div className="text-white text-center"><h3 className="text-center pt-1">PIN Information</h3></div>,
            size: 'mini',
            contentClass: ModalPINWrong,
            onClose: (result) => {console.log('Modal 1 result = ', result)}
        })
    }

    clickPaymentTeller = (e) => {
        this.refs.frameAction.showModal({
            headerClass: () => <div className="text-white text-center"><h3 className="text-center pt-1">Payment Information – Teller</h3></div>,
            size: 'mini',
            contentClass: ModalPaymentTeller,
            onClose: (result) => {console.log('Modal 1 result = ', result)}
        })
    }

    handleChangeInput = event => {
        const { value, maxLength } = event.target;
        const message = value.slice(0, maxLength);

        this.setState({
            form: {
                message
            }
        });

        if($("#inputesbnpinsubs").val() === ""){
            this.setState({next3: false});
            $("#inputesbnpinsubs").addClass("border-error");
            $("#req_esbnpinsubs").removeClass("d-none");
            $("#req_esbnpinsubs").addClass("d-block");
        } else {
            if($("#inputesbnpinsubs").val() === "123456"){
                $("#inputesbnpinsubs").removeClass("border-error");
                $("#req_esbnpinsubs").removeClass("d-block");
                $("#req_esbnpinsubs").addClass("d-none");
                this.setState({next3: true});
            } else {
                $("#inputesbnpinsubs").removeClass("border-error");
                $("#req_esbnpinsubs").removeClass("d-block");
                $("#req_esbnpinsubs").addClass("d-none");
                this.setState({next3: false});
            }
        }
    };

    clickFinish = () => {
        $("#inputesbnsubs").val("");
        $('#declaresubs').prop('checked', false);
        this.setState({
            active1: true,
            active2:false,
            active3:false,
            activeTab: 1,
            next2:false,
            next3:false,
            form: { message: "" },
            checkform:false,
            checkconfirmation:false,
        });
        this.props.clicksubsback()
    };

    render() {
        const activeTab1 =(this.state.activeTab == 1)? "active":"";
        const activeTab2 =(this.state.activeTab == 2)? "active":"";
        const activeTab3 =(this.state.activeTab == 3)? "active":"";

        const tab1 = this.state.active1 ? "active" : "";
        const tab2 = this.state.active2 ? "active" : "";
        const tab3 = this.state.active3 ? "active" : "";

        const toggle1 = this.state.active1? "tab" : "";
        const toggle2 = this.state.active2? "tab" : "";
        const toggle3 = this.state.active3? "tab" : "";

        var props = this.props;
        const step1 = "step1";
        const stepLast = "step-last";

        return (
            <>
                <div id="alert-declaresubs" className={"col-sm-2 text-center fade-out f-12"} style={{ position : "absolute", zIndex : 1, background: "brown", bottom: "35px", left: "35px" }}>
                    <div className={"px-2 pt-2 text-right text-white"}><i className="click-pointer icofont icofont-close" onClick={this.onClickCloseAlertDeclareSubs}></i></div>
                    <div id="content-alertdeclaresubs" className={"px-2 py-4 text-white"}></div>
                </div>
                <AppFrameAction ref="frameAction" />
                <div className="text-white f-12 container-fluid">
                    <div className="col align-self-center py-5">
                        <div className="step-tab">
                            <div id="crumbs">
                                <ul className="nav nav-pills">
                                    <li className={step1+' '+activeTab1} onClick={() => (toggle1=="tab")?this.setState({activeTab:1}):""}><a href={(toggle1=="tab")? "#subs1" : ""} className={tab1} data-toggle={toggle1}>Form</a></li>
                                    <li className={activeTab2} onClick={() => (toggle2=="tab")?this.setState({activeTab:2}):""}>{(toggle2=="tab")? <a href="#subs2" className={tab2} data-toggle={toggle2}>Confirmation</a> : <a className={tab2 + "click-pointer"} data-toggle={toggle2}>Confirmation</a>}</li>
                                    <li className={stepLast+' '+activeTab3} onClick={() => (toggle3=="tab")?this.setState({activeTab:3}):""}>{(toggle3=="tab")? <a href="#subs3" className={tab3} data-toggle={toggle3}>Finish</a> : <a className={tab3 + "click-pointer"} data-toggle={toggle3}>Finish</a>}</li>
                                </ul>
                            </div>
                        </div>
                        <div></div>
                        <div className="tab-content clearfix" >
                            <div className="tab-pane active" id="subs1">
                                <div className="container content-step">
                                    <div className="row">
                                        <div id="codeesbnget1" className="col-sm-12 py-3" style={{ borderRadius:'0 10px 0 0', color: 'white', backgroundColor: '#080808', marginBottom: '2px', border: '.5px #ffffff30 solid' }}>SBNCODE</div>
                                        <div className="col-sm-12 py-2 px-0">
                                            <table width="100%" className={"table table-bordered table-responsive mb-0 card-334"}>
                                                <tr>
                                                    <td className={"d-border text-right"}>SID :</td>
                                                    <td width="50%" className={"even-td d-border hover-tables"} >IDD13823223984</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>Customer Name :</td>
                                                    <td width="50%" className={"d-border hover-tables"}>FATCHUL NIMAH</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>Account No :</td>
                                                    <td width="50%" className={"even-td d-border hover-tables"} >234523423432</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>SB Account No :</td>
                                                    <td width="50%" className={"d-border hover-tables"}>DX921000021212143</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>National Quota (IDR) :</td>
                                                    <td width="50%" className={"even-td d-border hover-tables"}>4.323.735.000</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>Max. Subscription (IDR) :</td>
                                                    <td width="50%" className={"d-border hover-tables"}>7.000.000.000</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>Available Quota (IDR) :</td>
                                                    <td width="50%" className={"even-td d-border hover-tables"}>4.211.503.000</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>Min. Subscription (IDR) :</td>
                                                    <td width="50%" className={"d-border hover-tables"}>1.000.000</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>Subscription Amount (IDR)* :</td>
                                                    <td width="50%" className={"even-td d-border hover-tables"}>
                                                        <Input
                                                            disabled={this.state.checkform ? true : false}
                                                            id="inputesbnsubs"
                                                            type="number"
                                                            placeholder='Subscription Amount (IDR)'
                                                            onChange={() => {
                                                                if($("#inputesbnsubs").val() === ""){
                                                                    this.setState({next2: false});
                                                                    $("#inputesbnsubs").addClass("border-error");
                                                                    $("#req_subsamount").removeClass("d-none");
                                                                    $("#req_subsamount").addClass("d-block");
                                                                } else {
                                                                    $("#inputesbnsubs").removeClass("border-error");
                                                                    $("#req_subsamount").removeClass("d-block");
                                                                    $("#req_subsamount").addClass("d-none");
                                                                    this.setState({next2: true, inputamountsubs:$("#inputesbnsubs").val()});
                                                                }
                                                            }}
                                                            className="col-sm-12 pl-4 pr-0 text-right align-self-center input-right"/>
                                                        <small className="pl-4 text-danger d-none" id="req_subsamount">Required</small>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="col-sm-12 py-3">
                                            <input disabled={this.state.checkform ? true : false} className="magic-checkbox" type="checkbox" name="declaresubs"
                                                   id="declaresubs" value="option" onChange={() => {
                                                if($("#declaresubs").prop("checked") == true){
                                                    if($("#inputesbnsubs").val() === ""){
                                                        this.setState({nextcheck2 : true});
                                                    } else {
                                                        this.setState({nextcheck2 : true, next2:true, inputamountsubs:$("#inputesbnsubs").val()});
                                                    }
                                                    this.clickSubsAlert();
                                                } else {
                                                    this.setState({nextcheck2 : false});
                                                }
                                            }}/>
                                            <label htmlFor="declaresubs"
                                                   className="text-white f-12-center">
                                                I declare that I have :
                                                <ol>
                                                    <li>Read and understand the contents of the <a href="https://nnmaa.com/" target="_blank">Information Of Memorandum</a>.</li>
                                                    <li>Submit subscription data correctly and completely.</li>
                                                    <li>Agree to authorize (Wakalah) the management of investment funds in Sukuk Savings and all rights related to SBSN Sukuk Savings assets to Indonesian SBSN Issuing Companies as Trustees for investment activities that generate profits (For Savings Sukuk, in the event that they have become holders of Savings Sukuk owners).</li>
                                                </ol>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="container next-btn">
                                    <a className="btn btn-primary pull-right" href={this.state.next2 && this.state.nextcheck2 ? "#subs2" : "#"} data-toggle="tab" onClick={() => {
                                        if($("#inputesbnsubs").val() === ""){
                                            $("#inputesbnsubs").addClass("border-error");
                                            $("#req_subsamount").removeClass("d-none");
                                            $("#req_subsamount").addClass("d-block");
                                            this.setState({next2: false});
                                        } else {
                                            if($("#declaresubs").prop("checked") == true) {
                                                $("#inputesbnsubs").removeClass("border-error");
                                                $("#req_subsamount").removeClass("d-block");
                                                $("#req_subsamount").addClass("d-none");
                                                this.setState({
                                                    active2: true,
                                                    activeTab: 2,
                                                    next2: true,
                                                    nextcheck2: true,
                                                    checkform: true
                                                });
                                            } else {
                                                $("#content-alertdeclaresubs").text("Please Check Declare ");
                                                $("#alert-declaresubs").removeClass("fade-out");
                                                $("#alert-declaresubs").addClass("fade-in");
                                                this.setState({next2: false, nextcheck2 : false});
                                            }
                                        }
                                    }}>Next</a>
                                    <a href={"#subs1"} data-toggle="tab" onClick={this.clickFinish} className={"btn btn-success pull-right mx-2"}>Back</a>
                                </div>
                            </div>

                            <div className="tab-pane" id="subs2">
                                <div className="container content-step">
                                    <div className="row">
                                        <div id="codeesbnget2" className="col-sm-12 py-3" style={{ borderRadius:'0 10px 0 0', color: 'white', backgroundColor: '#080808', marginBottom: '2px', border: '.5px #ffffff30 solid' }}>SBNCODE</div>
                                        <div className="col-sm-12 py-2 px-0">
                                            <table width="100%" className={"table table-bordered table-responsive mb-0 card-334"}>
                                                <tr>
                                                    <td className={"d-border text-right"}>SID :</td>
                                                    <td width="50%" className={"even-td d-border hover-tables"} >IDD13823223984</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>Customer Name :</td>
                                                    <td width="50%" className={"d-border hover-tables"}>FATCHUL NIMAH</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>Account No :</td>
                                                    <td width="50%" className={"even-td d-border hover-tables"} >234523423432</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>SB Account No :</td>
                                                    <td width="50%" className={"d-border hover-tables"}>DX921000021212143</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>National Quota (IDR) :</td>
                                                    <td width="50%" className={"even-td d-border hover-tables"}>4.323.735.000</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>Max. Subscription (IDR) :</td>
                                                    <td width="50%" className={"d-border hover-tables"}>7.000.000.000</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>Available Quota (IDR) :</td>
                                                    <td width="50%" className={"even-td d-border hover-tables"}>4.211.503.000</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>Min. Subscription (IDR) :</td>
                                                    <td width="50%" className={"d-border hover-tables"}>1.000.000</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>Subscription Amount (IDR) :</td>
                                                    <td width="50%" className={"even-td d-border hover-tables"}>{this.state.inputamountsubs}</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>Enter Your PIN* :</td>
                                                    <td width="50%" className={"d-border hover-tables"}>
                                                        <Input
                                                            disabled={this.state.checkconfirmation ? true : false}
                                                            value={this.state.form.message}
                                                            maxLength="6"
                                                            id="inputesbnpinsubs"
                                                            type="password"
                                                            placeholder='Enter Your PIN'
                                                            onChange={this.handleChangeInput}
                                                            className="col-sm-12 pl-4 pr-0 text-right align-self-center input-right"/>
                                                        <small className="pl-4 text-danger d-none" id="req_esbnpinsubs">Required</small>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="container next-btn">
                                    <a className="btn btn-primary pull-right" href={this.state.next3 ? "#subs3" : "#"} data-toggle="tab" onClick={() => {
                                        if($("#inputesbnpinsubs").val() === ""){
                                            $("#inputesbnpinsubs").addClass("border-error");
                                            $("#req_esbnpinsubs").removeClass("d-none");
                                            $("#req_esbnpinsubs").addClass("d-block");
                                            this.setState({next3: false});
                                        } else {
                                            if($("#inputesbnpinsubs").val() === "123456"){
                                                $("#inputesbnpinsubs").removeClass("border-error");
                                                $("#req_esbnpinsubs").removeClass("d-block");
                                                $("#req_esbnpinsubs").addClass("d-none");
                                                this.setState({active3:true,activeTab:3, next3: true, checkconfirmation : true});
                                            } else {
                                                $("#inputesbnpinsubs").removeClass("border-error");
                                                $("#req_esbnpinsubs").removeClass("d-block");
                                                $("#req_esbnpinsubs").addClass("d-none");
                                                this.setState({next3: false, form:{message:''}});
                                                this.clickPinAlert();
                                            }
                                        }
                                    }}>Next</a>
                                    <a href={"#subs1"} data-toggle="tab" onClick={this.clickFinish} className={"btn btn-success pull-right mx-2"}>Back</a>
                                </div>
                            </div>

                            <div className="tab-pane" id="subs3">
                                <div className="container content-step">
                                    <div className="row">
                                        <div id="codeesbnget3" className="col-sm-12 py-3" style={{ borderRadius:'0 10px 0 0', color: 'white', backgroundColor: '#080808', marginBottom: '2px', border: '.5px #ffffff30 solid' }}>SBNCODE</div>
                                        <div className="col-sm-12 py-2 px-0">
                                            <table width="100%" className={"table table-bordered table-responsive mb-0 card-169"}>
                                                <tr>
                                                    <td className={"d-border text-right"}>Payment Amount (IDR) :</td>
                                                    <td width="50%" className={"even-td d-border hover-tables"} >{this.state.inputamountsubs}</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>Billing Code :</td>
                                                    <td width="50%" className={"d-border hover-tables"}>9XO12ABC323423431</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>Payment Deadline :</td>
                                                    <td width="50%" className={"even-td d-border hover-tables"}>30 Desember 2021 12:00:00 WIB</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                    <div className={"row bg-gray-tradding py-3"}>
                                        <div className="col-sm-12 px-0">

                                            <div className="tab-content clearfix">
                                                <div className="tab-pane active py-2" id="4b">
                                                    <div className={"col-sm-12 mt-4 card-132"}>
                                                        <div className={"text-center col-sm-12 bg-danger py-5"}>
                                                            <i className="text-white">If you exceed the payment limit deadline then the purchase will be automatically canceled.</i>
                                                        </div>
                                                        <div className={"text-center row col-sm-12 py-3"}>
                                                            <div className={"col-sm-12 text-left py-2"}>Payment Instruction :</div>
                                                            <div className={"col-sm-4 py-2 bg-grey-mystic"}><a href="http://202.162.223.154:8081/info-pembayaranatm" target="_blank" style={{fontWeight:'bold'}}><i className="fa fa-book"></i> ATM Banking</a></div>
                                                            <div className={"col-sm-4 py-2 bg-grey-mystic"}><a href="http://202.162.223.154:8081/info-pembayaranatm" target="_blank" style={{fontWeight:'bold'}}><i className="fa fa-book"></i> Internet Banking</a></div>
                                                            <div className={"col-sm-4 py-2 bg-grey-mystic"}><a href="#subs3" data-toggle="tab" onClick={this.clickPaymentTeller}><i className="fa fa-book"></i> Teller</a></div>
                                                        </div>
                                                        <div className={"col-sm-12 text-right mb-0 px-3 h-40 py-5"}>
                                                            <a href={"#subs1"} data-toggle="tab" onClick={this.clickFinish} className={"btn btn-primary pull-right"}>Finish</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

class HistoricalOrderEsbn_Base extends React.PureComponent{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        $(document).ready(function() {
            var sd = new Date(), ed = new Date();
            var isRtl = $('html').attr('dir') === 'rtl';
            $('#datepickerstartHSbn').datepicker({
                orientation: isRtl ? 'auto right' : 'auto left',
                format: "dd/mm/yyyy",
                changeMonth: true,
                changeYear: true,
                endDate: ed,
                autoclose: true,
                todayBtn: "linked",
            });
            $('#datepickerendHSbn').datepicker({
                orientation: isRtl ? 'auto right' : 'auto left',
                format: "dd/mm/yyyy",
                changeMonth: true,
                changeYear: true,
                endDate: ed,
                autoclose: true,
                todayBtn: "linked",
            });
        });
    }

    selectSelectionTab = theme => ({
        ...theme,
        borderRadius: 5,
        colors: {
            ...theme.colors,
            neutral0: this.props.thememode === true ? '#3D3E3F' : '#CDCDCE',
            neutral20: this.props.thememode === true ? '#333332' : '#E9E9E9',
            neutral30: this.props.thememode === true ? '#333332' : '#E9E9E9',
            neutral40: this.props.thememode === true ? '#1A1A1A' : '#1A1A1A',
            neutral80: this.props.thememode === true ? '#FFFFFF' : '#878787',
            primary75: this.props.thememode === true ? '#FFFFFF' : '#FFFFFF',
            primary50: this.props.thememode === true ? '#4D4D4E' : '#4D4D4E',
            primary25: this.props.thememode === true ? '#202020' : '#ece9ea',
            primary: '#0071BC',
        },
    });

    buttonClickSbnHisto = (e) => {
        this.refs.frameAction.showModal({
            headerClass: () =>
                <div style={{ borderBottom:"1px solid white" }}>
                    <div className="row py-2">
                        <div className="col-sm-6">
                            <h5 id="sbncodetitlehist" className="font-weight-bold">SBN CODE</h5>
                        </div>
                        <div className="col-sm-6 text-right">
                            <i className="icofont icofont-close text-icofont-close text-white click-pointer" onClick={this.closeClick}></i>
                        </div>
                    </div>
                </div>,
            size: 'large',
            contentClass: SbnHistoDetailModal,
            onClose: (result) => {console.log('Modal 1 result = ', result)}
        })
    };


    closeClick = (e) => {
        this.refs.frameAction.closeModal(100);
    }

    render() {
        //Add your search logic here.
        const customFilterSbn  = (option, searchText) => {
            var sbncode = option.data.sbncode.toLowerCase().includes(searchText.toLowerCase());
            if (sbncode) {
                return true;
            }
        };

        const customStylesSbn = {
            control: (base, state) => ({
                ...base,
                // match with the menu
                borderRadius: 0,
                border: "var(--warna-d-border) 1px solid"
            }),
            menu: base => ({
                ...base,
                // override border radius to match the box
                borderRadius: 0,
            }),
            menuList: base => ({
                ...base,
                // override border radius to match the box
                borderRadius: 0
            })
        };

        const esbnOptionsSbn = [
            { value:'IDX29939CXIV001', sbncode: 'IDX29939CXIV001' },
            { value:'IDX29939CXI2707', sbncode: 'IDX29939CXI2707' },
        ];

        return (
            <>
                <AppFrameAction ref="frameAction" />
                <div className="card-header header-pegadaian bg-grey">
                    <div className="row col-sm-12 px-0 mx-0 py-3">
                        <div className="col-sm-12 h-84">
                            <div className="row">
                                <div className="col-sm-6 row">
                                    <div className="col-sm-3 align-self-center">SBN No. </div>
                                    <Dropdown
                                        placeholder='Choose'
                                        search selection
                                        options={sbnnoOptions}
                                        defaultValue={sbnnoOptions[0].value}
                                        className="col-sm-9 f-12"/>
                                </div>
                                <div className="col-sm-6 row">
                                    <div className="col-sm-3 align-self-center">Status </div>
                                    <Dropdown
                                        placeholder='Choose'
                                        search selection
                                        options={statussbnOptions}
                                        defaultValue={statussbnOptions[0].value}
                                        className="col-sm-9 f-12"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="row col-sm-6 ui small input f-12 text-center align-self-center black ver-center px-5">
                                    <table>
                                        <tr>
                                            <td className={"px-0"}>
                                                <span className="input-group-addon h-35 bg-tableheader" style={{height:'31px',border: "1px solid var(--warna-d-border)"}}>From</span>
                                            </td>
                                            <td className={"px-0"}>
                                                <div className="ui input pl-0" style={{paddingRight:'37px',marginLeft:'-1px'}}>
                                                    <Input placeholder='dd/mm/yy' id="datepickerstartHSbn" className="col-sm-12 pl-0 pr-0 text-center align-self-center "/>
                                                    <span className="input-group-addon h-35 no-border-radius bg-tableheader" style={{width: '100%'}}>
                                                <span
                                                    className="fa fa-calendar-alt"></span>
                                            </span>
                                                </div>
                                            </td>
                                            <td className={"px-0"}>
                                                <span className="input-group-addon h-35 bg-tableheader" style={{height:'31px',border: "1px solid var(--warna-d-border)"}}>To</span>
                                            </td>
                                            <td className={"px-0"}>
                                                <div className="ui input" style={{paddingRight:'40px',marginLeft:'-1px'}}>
                                                    <Input placeholder='dd/mm/yy' id="datepickerendHSbn" className="col-sm-12 pl-0 pr-0 text-center align-self-center "/>
                                                    <span className="input-group-addon h-35 no-border-radius bg-tableheader" style={{width: '100%'}}>
                                                <span
                                                    className="fa fa-calendar-alt"></span>
                                            </span>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <div className="col-sm-2 align-self-center px-5">
                                    <button className="btn btn-primary w-100">Search</button>
                                </div>
                                <div className="col-sm-4 align-self-center px-5">
                                    <Select
                                        getOptionLabel={(option) => `${option.sbncode}`}
                                        filterOption={customFilterSbn}
                                        isSearchable={true}
                                        maxMenuHeight={155}
                                        styles={customStylesSbn}
                                        placeholder={<div>Search..</div>}
                                        options={esbnOptionsSbn}
                                        className="stockPageSelect text-left"
                                        theme={this.selectSelectionTab}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body align-self-center text-center f-16">
                    <TableHistoricalEsbn clicksbnhistdetail={this.buttonClickSbnHisto} size={widthSize()} gridView="tab" classView="f-12"/>
                </div>
            </>
        );
    }
}

class HistoricalEsbn_Base extends React.PureComponent{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="card-header header-pegadaian bg-grey">
                    <div className="row col-sm-12 px-0 mx-0 py-3">
                        <div className="col-sm-10 px-0 mx-0 f-14 align-self-center"></div>
                        <div className="col-sm-2 text-right font-weight-bold px-0 mx-0">
                            <i className="f-18 ion ion-md-sync click-pointer"></i>
                        </div>
                    </div>
                </div>
                <div className="card-body align-self-center text-center f-16 py-5">
                    <div className="py-5">
                        <div className="py-5">
                            <i className="icofont icofont-warning-alt f-18"></i>
                            <p>E-SBN - Historical Order Esbn</p>
                            <p>Not yet available. <br/>Please contact our customer service.</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

class TablePorfolioEsbn extends React.PureComponent{
    constructor(props) {
        super(props);
        const self = this;
        const s = props.size;
        this.state = {
            columnDefs: [
                { field: "no", headerName: "#", sortable: true, filter: "agNumberColumnFilter",
                    width: 50, minWidth: 50, comparator: stringComparator,
                    cellClass : function (params) {
                        return " grid-table text-center f-12 d-border-aggrid-right";
                    }},
                { field: "ordercode", headerName: "Order Code", sortable: true, filter: "agTextColumnFilter", resizable: true,
                    width: s=="s49"?230:s=="s50"?200:s=="s67"?160:s=="s75"?160:s=="s80"?140:120, minWidth: 120, comparator: stringComparator,
                    cellClass : function (params) {
                        return " grid-table text-center f-12 d-border-aggrid-right";
                    }, suppressSizeToFit: true},
                { field: "sbncode", headerName: "SBN Series", sortable: true, filter: "agTextColumnFilter", resizable: true,
                    width: s=="s49"?240:s=="s50"?200:s=="s67"?150:s=="s75"?140:110, minWidth: 110, comparator: stringComparator,
                    cellClass : function (params) {
                        return " grid-table text-center f-12 d-border-aggrid-right";
                    },
                    suppressSizeToFit: true},
                { field: "subscriptiondate", headerName: "Subscription Date", sortable: true, filter: "agTextColumnFilter",
                    resizable: true,
                    width: s=="s49"?240:s=="s50"?220:s=="s67"?180:s=="s75"?170:150, minWidth: 150, comparator: dateComparator,
                    cellClass : function (params) {
                        return " grid-table text-center f-12 d-border-aggrid-right";
                    } },
                { field: "amount", headerName: "Amount (IDR)", sortable: true, filter: "agNumberColumnFilter", resizable: true,
                    width: s=="s49"?240:s=="s50"?220:s=="s67"?200:s=="s75"?160:130, minWidth: 130, comparator: integerComparator,
                    cellClass : function (params) {
                        return " grid-table text-right f-12 d-border-aggrid-right";
                    }},
                { field: "remamount", headerName: "Rem. Amount (IDR)", sortable: true, filter: "agNumberColumnFilter", resizable: true,
                    width: s=="s49"?240:s=="s50"?210:s=="s67"?200:s=="s75"?190:170, minWidth: 170, comparator: integerComparator,
                    cellClass : function (params) {
                        return " grid-table text-right f-12 d-border-aggrid-right";
                    }},
                { field: "remredeem", headerName: "Rem. Redeem (IDR)", sortable: true, filter: "agNumberColumnFilter", resizable: true,
                    width: s=="s49"?230:s=="s50"?200:s=="s67"?200:s=="s75"?190:170, minWidth: 170, comparator: integerComparator,
                    cellClass : function (params) {
                        return " grid-table text-right f-12 d-border-aggrid-right";
                    }},
                { field: "couponrate", headerName: "Coupon Rate", sortable: true, filter: "agNumberColumnFilter", resizable: true,
                    width: s=="s49"?190:s=="s50"?175:s=="s67"?180:s=="s75"?170:125, minWidth: 125, comparator: stringComparator,
                    cellClass : function (params) {
                        return " grid-table text-right f-12 d-border-aggrid-right";
                    } },
                { field: "coupondate", headerName: "Coupon Date", sortable: true, filter: "agNumberColumnFilter", resizable: true,
                    width: s=="s49"?230:s=="s50"?200:s=="s67"?160:s=="s75"?150:130, minWidth: 130, comparator: stringComparator,
                    cellClass : function (params) {
                        return " grid-table text-right f-12 d-border-aggrid-right";
                    } },
                { field: "expirationdate", headerName: "Expiration Date", sortable: true, filter: "agTextColumnFilter", resizable: true,
                    width: s=="s49"?225:s=="s50"?200:s=="s67"?160:s=="s75"?145:130, minWidth: 130, comparator: dateComparator,
                    cellClass : function (params) {
                        return " grid-table text-center f-12 d-border-aggrid-right";
                    } },
                { field: "earlyredemption", headerName: "Early Redemption", width: 140, minWidth: 140,
                    pinned: "right", lockPosition: true, lockVisible: true,
                    cellClass : function (params) {
                        return " grid-table text-center locked-col locked-visible d-border-aggrid-right";
                    },
                    cellRenderer : function (params) {
                        var sbncode = params.data.sbncode;
                        var eDiv = document.createElement('div');
                        eDiv.innerHTML = '<span class="px-1">' +
                            '<button class="btn-cellredemption btn btn-sm btn-primary mx-1 f-9 w-50">Redeem</button>' +
                            '</span>';
                        var sButton = eDiv.querySelectorAll('.btn-cellredemption')[0];

                        /*bButton.addEventListener('click', function () {});
                        sButton.addEventListener('click', function () {});*/

                        sButton.addEventListener('click', self.props.clicksbnredeem);
                        sButton.addEventListener('click', function () {
                            console.log('Bisa '+ $("#sbncoderedeem").text(sbncode));
                            console.log('Bisa '+ $("#sbncoderedeem2").text(sbncode));
                            console.log('Bisa '+ $("#sbncoderedeem3").text(sbncode));
                        });

                        if(sbncode !== ''){
                            if(sbncode === 'TESTSBN2'){
                                return 'Unable To Redeem';
                            } else{
                                return eDiv;
                            }

                        } else {
                            return '';
                        }

                    },suppressSizeToFit: true },
                { field: "detail", headerName: "Detail", width: 100, minWidth: 100,
                    pinned: "right", lockPosition: true, lockVisible: true,
                    cellClass : function (params) {
                        return " grid-table text-center locked-col locked-visible d-border-aggrid-right click-pointer";
                    },
                    cellRenderer : function (params) {
                        var sbncode = params.data.sbncode;
                        var eDiv = document.createElement('div');
                        eDiv.innerHTML = '<i class="fa fa-search btn-cellorder"></i>';
                        var aButton = eDiv.querySelectorAll('.btn-cellorder')[0];

                        aButton.addEventListener('click', self.props.clicksbncode);
                        aButton.addEventListener('click', function () {
                            console.log('Bisa '+ $("#sbncodetitle").text(sbncode));

                            if(sbncode === 'TESTSBN1'){
                                $("#early-show").removeClass("d-none");
                                $("#early-show").addClass("d-block");

                                $("#early-yes").removeClass("d-none");
                                $("#early-yes").addClass("d-block");

                                $("#early-no").removeClass("d-block");
                                $("#early-no").addClass("d-none");
                            } else {
                                $("#early-show").removeClass("d-block");
                                $("#early-show").addClass("d-none");

                                $("#early-yes").removeClass("d-block");
                                $("#early-yes").addClass("d-none");

                                $("#early-no").removeClass("d-none");
                                $("#early-no").addClass("d-block");
                            }
                        });

                        if(sbncode !== ''){
                            return eDiv;
                        } else {
                            return '';
                        }
                    },suppressSizeToFit: true },
            ],
            defaultColDef: {
                sortable: true,
                filter: true,
            },
            rowData: [
                { no: "1",
                    ordercode: "021454521515",
                    sbncode: "TESTSBN1",
                    subscriptiondate: "04 Aug 2021 15:21:12 WIB",
                    amount: "4000000",
                    remamount: "4000000",
                    remredeem: "4000000",
                    couponrate: "5,00%",
                    coupondate : "date 5 every month",
                    expirationdate : "01 Feb 2023",
                    earlyredepmtion : "",
                    detail : ""
                },
                { no: "2",
                    ordercode: "021454521515",
                    sbncode: "TESTSBN2",
                    subscriptiondate: "04 Aug 2021 15:21:12 WIB",
                    amount: "3000000",
                    remamount: "4000000",
                    remredeem: "4000000",
                    couponrate: "7,00%",
                    coupondate : "date 7 every month",
                    expirationdate : "02 Mar 2023",
                    earlyredepmtion : "",
                    detail : ""
                },
                { no: s,
                    ordercode: "",
                    sbncode: "",
                    subscriptiondate: "",
                    amount: "",
                    remamount: "",
                    remredeem: "",
                    couponrate: "",
                    coupondate : "",
                    expirationdate : "",
                    earlyredepmtion : "",
                    detail : ""},
                { no: "",
                    ordercode: "",
                    sbncode: "",
                    subscriptiondate: "",
                    amount: "",
                    remamount: "",
                    remredeem: "",
                    couponrate: "",
                    coupondate : "",
                    expirationdate : "",
                    earlyredepmtion : "",
                    detail : ""},
                { no: "",
                    ordercode: "",
                    sbncode: "",
                    subscriptiondate: "",
                    amount: "",
                    remamount: "",
                    remredeem: "",
                    couponrate: "",
                    coupondate : "",
                    expirationdate : "",
                    earlyredepmtion : "",
                    detail : ""},
            ],
            sideBar: {
                toolPanels: [
                    {
                        id: "columns",
                        labelDefault: "Columns",
                        labelKey: "columns",
                        iconKey: "columns",
                        toolPanel: "agColumnsToolPanel",
                        toolPanelParams: {
                            suppressRowGroups: true,
                            suppressValues: true,
                            suppressPivots: true,
                            suppressPivotMode: true,
                            suppressSideButtons: true,
                            suppressColumnFilter: true,
                            suppressColumnSelectAll: true,
                            suppressColumnExpandAll: true
                        },
                    }, {
                        id: "filters",
                        labelDefault: "Filters",
                        labelKey: "filters",
                        iconKey: "filter",
                        toolPanel: "agFiltersToolPanel"
                    }
                ],
                defaultToolPanel: ""
            },
        }
    }

    onGridReady = params => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;

        params.api.sizeColumnsToFit();
        window.addEventListener("resize", function() {
            setTimeout(function() {
                params.api.sizeColumnsToFit();
            });
        });

        params.api.sizeColumnsToFit();
    };

    onFirstDataRendered(params) {
        params.api.sizeColumnsToFit();
    }

    render() {
        return (
            <div style={{ width: "100%", height: "100%" }}>
                <div
                    className={"card-472 ag-theme-balham-dark ag-striped-odd"}
                    id="myGrid"
                    style={{
                        width: "100%"
                    }}>
                    <AgGridReact
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}
                        defaultColDef={this.state.defaultColDef}
                        onGridReady={this.onGridReady}
                        rowHeight={32}
                        onFirstDataRendered={this.onFirstDataRendered.bind(this)}
                    >
                    </AgGridReact>
                </div>
            </div>
        );
    }
}

class TableHistoricalEsbn extends React.PureComponent{
    constructor(props) {
        super(props);
        const self = this;
        const s = props.size;
        this.state = {
            columnDefs: [
                { field: "subscriptiondate", headerName: "Subscription Date", sortable: true, filter: "agTextColumnFilter",
                    resizable: true,
                    width: s=="s49"?420:s=="s50"?380:s=="s67"?340:s=="s75"?305:s=="s80"?250:s=="s85"?215:s=="s90"?200:190, minWidth: 190, comparator: dateComparator,
                    cellClass : function (params) {
                        return " grid-table text-center f-12 d-border-aggrid-right";
                    } },
                { field: "sbncode", headerName: "SBN Code", sortable: true, filter: "agTextColumnFilter", resizable: true,
                    width: s=="s49"?380:s=="s50"?350:s=="s67"?305:s=="s75"?280:s=="s80"?230:s=="s85"?210:s=="s90"?200:190, minWidth: 190, comparator: stringComparator,
                    cellClass : function (params) {
                        return " grid-table text-center f-12 d-border-aggrid-right";
                    },
                    suppressSizeToFit: true},
                { field: "billingcode", headerName: "Billing Code", sortable: true, filter: "agTextColumnFilter", resizable: true,
                    width: s=="s49"?370:s=="s50"?320:s=="s67"?280:s=="s75"?270:s=="s80"?230:s=="s85"?210:s=="s90"?200:190, minWidth: 190, comparator: stringComparator,
                    cellClass : function (params) {
                        return " grid-table text-center f-12 d-border-aggrid-right";
                    },
                    suppressSizeToFit: true},
                { field: "amount", headerName: "Amount (IDR)", sortable: true, filter: "agNumberColumnFilter", resizable: true,
                    width: s=="s49"?350:s=="s50"?310:s=="s67"?270:s=="s75"?260:s=="s80"?230:s=="s85"?210:s=="s90"?200:180, minWidth: 180, comparator: integerComparator,
                    cellClass : function (params) {
                        return " grid-table text-right f-12 d-border-aggrid-right";
                    }},
                { field: "ntpn", headerName: "NTPN", sortable: true, filter: "agNumberColumnFilter", resizable: true,
                    width: s=="s49"?350:s=="s50"?314:s=="s67"?270:s=="s75"?260:s=="s80"?230:s=="s85"?210:s=="s90"?190:180, minWidth: 180, comparator: stringComparator,
                    cellClass : function (params) {
                        return " grid-table text-right f-12 d-border-aggrid-right";
                    } },
                { field: "status", headerName: "Status", sortable: true, filter: "agTextColumnFilter", resizable: true,
                    width: s=="s49"?340:s=="s50"?300:s=="s67"?270:s=="s75"?250:s=="s80"?230:s=="s85"?210:s=="s90"?190:180, minWidth: 180, comparator: stringComparator,
                    cellClass : function (params) {
                        return " grid-table text-center f-12 d-border-aggrid-right";
                    } },
                { field: "detail", headerName: "Detail", width: 140, minWidth: 140,
                    pinned: "right", lockPosition: true, lockVisible: true,
                    cellClass : function (params) {
                        return " grid-table text-center locked-col locked-visible d-border-aggrid-right";
                    },
                    cellRenderer : function (params) {
                        var sbncode = params.data.sbncode;
                        var eDiv = document.createElement('div');
                        eDiv.innerHTML = '<span class="px-1">' +
                            '<i class="btn-cellredemption fa fa-search click-pointer"></i>' +
                            '</span>';
                        var sButton = eDiv.querySelectorAll('.btn-cellredemption')[0];

                        /*bButton.addEventListener('click', function () {});
                        sButton.addEventListener('click', function () {});*/

                        sButton.addEventListener('click', self.props.clicksbnhistdetail);
                        sButton.addEventListener('click', function () {
                            console.log('Bisa '+ $("#sbncodetitlehist").text(sbncode));
                        });

                        if(sbncode !== ''){
                            return eDiv;

                        } else {
                            return '';
                        }

                    },suppressSizeToFit: true },
            ],
            defaultColDef: {
                sortable: true,
                filter: true,
            },
            rowData: [
                {
                    subscriptiondate: s,
                    sbncode: "TESTSBN1",
                    billingcode: "TRX9188829910001",
                    amount: "4000000",
                    ntpn : "DXT7762666662",
                    status : "PAID",
                    detail : "",
                },
                { subscriptiondate: "10 Aug 2021 15:21:12 WIB",
                    sbncode: "TESTSBN2",
                    billingcode: "TRX9188829910002",
                    amount: "5000000",
                    ntpn : "DXT7762666777",
                    status : "UNPAID",
                    detail : "",
                },
                { subscriptiondate: "",
                    sbncode: "",
                    billingcode: "",
                    amount: "",
                    ntpn : "",
                    status : "",
                    detail : ""
                },
                { subscriptiondate: "",
                    sbncode: "",
                    billingcode: "",
                    amount: "",
                    ntpn : "",
                    status : "",
                    detail : ""
                },
                { subscriptiondate: "",
                    sbncode: "",
                    billingcode: "",
                    amount: "",
                    ntpn : "",
                    status : "",
                    detail : ""
                },
            ],
            sideBar: {
                toolPanels: [
                    {
                        id: "columns",
                        labelDefault: "Columns",
                        labelKey: "columns",
                        iconKey: "columns",
                        toolPanel: "agColumnsToolPanel",
                        toolPanelParams: {
                            suppressRowGroups: true,
                            suppressValues: true,
                            suppressPivots: true,
                            suppressPivotMode: true,
                            suppressSideButtons: true,
                            suppressColumnFilter: true,
                            suppressColumnSelectAll: true,
                            suppressColumnExpandAll: true
                        },
                    }, {
                        id: "filters",
                        labelDefault: "Filters",
                        labelKey: "filters",
                        iconKey: "filter",
                        toolPanel: "agFiltersToolPanel"
                    }
                ],
                defaultToolPanel: ""
            },
        }
    }

    onGridReady = params => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;

        params.api.sizeColumnsToFit();
        window.addEventListener("resize", function() {
            setTimeout(function() {
                params.api.sizeColumnsToFit();
            });
        });

        params.api.sizeColumnsToFit();
    };

    onFirstDataRendered(params) {
        params.api.sizeColumnsToFit();
    }

    render() {
        return (
            <div style={{ width: "100%", height: "100%" }}>
                <div
                    className={"card-344 ag-theme-balham-dark ag-striped-odd"}
                    id="myGrid"
                    style={{
                        width: "100%"
                    }}>
                    <AgGridReact
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}
                        defaultColDef={this.state.defaultColDef}
                        onGridReady={this.onGridReady}
                        rowHeight={32}
                        onFirstDataRendered={this.onFirstDataRendered.bind(this)}
                    >
                    </AgGridReact>
                </div>
            </div>
        );
    }
}

class SbnCodeDetailModal extends React.PureComponent {

    render() {
        return (
            <>
                <AppFrameAction ref="frameAction" />
                <ModalSbnCodeDetail />
            </>
        );
    }
}

class SbnRedeemModal extends React.PureComponent {

    render() {
        return (
            <>
                <AppFrameAction ref="frameAction" />
                <ModalRedeemEsbn />
            </>
        );
    }
}

class SbnHistoDetailModal extends React.PureComponent {

    render() {
        return (
            <>
                <AppFrameAction ref="frameAction" />
                <ModalHistoEsbn />
            </>
        );
    }
}

function stringComparator(valueA, valueB){
    if(valueA !== null && valueB !== null){
        if(valueA.length < 2){
            return null;
        }else if(valueB.length < 2){
            return null;
        }else{
            return valueA.toLowerCase().localeCompare(valueB.toLowerCase());
        }
    }

}
function integerComparator(valueA, valueB){
    if(valueA == ""){
        return null;
    }else if(valueB == ""){
        return null;
    }else{
        return valueA - valueB;
    }
}

function dateComparator(date1, date2) {
    var date1Number = monthToComparableNumber(date1);
    var date2Number = monthToComparableNumber(date2);
    if (date1Number === null && date2Number === null) {
        return date1;
    }
    if (date1Number === null) {
        return date1;
    }
    if (date2Number === null) {
        return date2;
    }
    return date1Number - date2Number;
}

function monthToComparableNumber(date) {
    if (date === undefined || date === null || date.length !== 10) {
        return null;
    }
    var yearNumber = date.substring(6, 10);
    var monthNumber = date.substring(3, 5);
    var dayNumber = date.substring(0, 2);
    var result = yearNumber * 10000 + monthNumber * 100 + dayNumber;
    return result;
}

class ModalAlertSubs extends React.Component {
    closeClick = (e) => {
        this.refs.frameAction.closeModal(100);
    }

    render() {
        return (
            <>
                <AppFrameAction ref="frameAction" />
                <WSConnectionAction ref="wsAction" />
                <div className="text-white f-12 text-center bg-dark-grey">
                    <div className="form-group">
                        <p className="col-sm-12 px-5 py-2 col-form-label">
                            A submitted order cannot be changed/cancelled and if no payment is made within a certain period after receiving the billing code, it will automatically be canceled/expired.
                        </p>
                    </div>
                </div>
                <div className="text-center">
                    <button className="btn btn-primary btn-sm col-sm-3" onClick={this.closeClick}>OK</button>
                </div>
            </>
        );
    }
}

class ModalPaymentTeller extends React.Component {
    closeClick = (e) => {
        this.refs.frameAction.closeModal(100);
    }

    render() {
        return (
            <>
                <AppFrameAction ref="frameAction" />
                <WSConnectionAction ref="wsAction" />
                <div className="text-white f-12 text-center bg-dark-grey">
                    <div className="form-group">
                        <p className="col-sm-12 px-5 py-2 col-form-label">
                            Payments via tellers can be made at the offices of each registered bank. To pay through a teller, investors only need to show the BILLING CODE that has been received after ordering to the bank teller.
                        </p>
                    </div>
                </div>
                <div className="text-center">
                    <button className="btn btn-primary btn-sm col-sm-3" onClick={this.closeClick}>OK</button>
                </div>
            </>
        );
    }
}

class ModalPINWrong extends React.Component {
    closeClick = (e) => {
        this.refs.frameAction.closeModal(100);
    }

    render() {
        return (
            <>
                <AppFrameAction ref="frameAction" />
                <WSConnectionAction ref="wsAction" />
                <div className="text-white f-12 text-center bg-dark-grey">
                    <div className="form-group">
                        <p className="col-sm-12 px-5 py-2 col-form-label">
                            Your PIN is wrong.
                        </p>
                    </div>
                </div>
                <div className="text-center">
                    <button className="btn btn-primary btn-sm col-sm-3" onClick={this.closeClick}>OK</button>
                </div>
            </>
        );
    }
}

const EsbnPage = ContextConnector(BIPSAppContext,
    (vars, actions, props) => ({
    }),
)(EsbnPage_Base);

const PortfolioEsbn = ContextConnector(BIPSAppContext,
    (vars, actions, props) => ({
        thememode: vars.thememode,
        checkStatusEsbn : vars.checkStatusEsbn,
        updateStatusEsbn :(checkStatusEsbn)=>{actions.sendAction('updateStatusEsbn',{checkStatusEsbn})}
    }), ["updateStatusEsbn"]
)(PortfolioEsbn_Base);

const TransactionEsbn = ContextConnector(BIPSAppContext,
    (vars, actions, props) => ({

    }),
)(TransactionEsbn_Base);

const HistoricalEsbn = ContextConnector(BIPSAppContext,
    (vars, actions, props) => ({

    }),
)(HistoricalEsbn_Base);

const CustomFrameHeaderEsbn = ContextConnector(BIPSAppContext,
    (vars, actions, props) => ({
        checkStatusEsbn : vars.checkStatusEsbn,
        updateStatusEsbn :(checkStatusEsbn)=>{actions.sendAction('updateStatusEsbn',{checkStatusEsbn})}
    }), ["updateStatusEsbn"]
)(CustomFrameHeaderEsbn_Base);

const TransactionSBN = ContextConnector(BIPSAppContext,
    (vars, actions, props) => ({
        checkStatusEsbn : vars.checkStatusEsbn,
        updateStatusEsbn :(checkStatusEsbn)=>{actions.sendAction('updateStatusEsbn',{checkStatusEsbn})}
    }), ["updateStatusEsbn"]
)(TransactionSBN_Base);

const SBNSubscribeBuy = ContextConnector(BIPSAppContext,
    (vars, actions, props) => ({
        thememode: vars.thememode,
        signupState: vars.signupState,
        isSignup : (signupState)=> {actions.sendAction('isSignup', {signupState})},
        checkStatusEsbn : vars.checkStatusEsbn,
        updateStatusEsbn :(checkStatusEsbn)=>{actions.sendAction('updateStatusEsbn',{checkStatusEsbn})}
    }), ["updateStatusEsbn"]
)(SBNSubscribeBuy_Base);

const HistoricalOrderEsbn = ContextConnector(BIPSAppContext,
    (vars, actions, props) => ({
        thememode: vars.thememode,
        signupState: vars.signupState,
        isSignup : (signupState)=> {actions.sendAction('isSignup', {signupState})},
        checkStatusEsbn : vars.checkStatusEsbn,
        updateStatusEsbn :(checkStatusEsbn)=>{actions.sendAction('updateStatusEsbn',{checkStatusEsbn})}
    }), ["updateStatusEsbn"]
)(HistoricalOrderEsbn_Base);

export default EsbnPage;
export {CustomFrameHeaderEsbn, HistoricalEsbn, PortfolioEsbn, TransactionEsbn, Esbn, SubscribeEsbn, HistoricalOrderEsbn};
