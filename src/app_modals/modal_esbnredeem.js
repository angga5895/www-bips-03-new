import React from "react";
import {AppFrameAction} from "../appframe";
import {ContextConnector} from "../appcontext";
import {BIPSAppContext} from "../AppData";
import {Input} from "semantic-ui-react";
import $ from "jquery";
import {WSConnectionAction} from "../appnetwork";

class RedeemEsbnModal_Base extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    /*closeClick = (e) => {
        this.refs.frameAction.closeModal(100);
    }*/

    state = {
        active1:true,
        active2:false,
        active3:false,
        active4:false,
        active5:false,
        activeTab:1,
        next2:false,
        next3:false,
        nextcheck2:false,
        checkform:false,
        checkconfirmation:false,
        inputamountredeem : '',
        form: { message: "" }
    }

    onClickCloseAlertDeclareRedeem = (e) => {
        $("#alert-declareredeem").removeClass("fade-in");
        $("#alert-declareredeem").addClass("fade-out");
    };

    clickRedeemAlert = (e) => {
        this.refs.frameAction.showModal({
            headerClass: () => <div className="text-white text-center"><h3 className="text-center pt-1">Term and Condition Early Redemption</h3></div>,
            size: 'mini',
            contentClass: ModalAlertRedeem,
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

    handleChangeInput = event => {
        const { value, maxLength } = event.target;
        const message = value.slice(0, maxLength);

        this.setState({
            form: {
                message
            }
        });

        if($("#inputesbnpin").val() === ""){
            this.setState({next3: false});
            $("#inputesbnpin").addClass("border-error");
            $("#req_esbnpin").removeClass("d-none");
            $("#req_esbnpin").addClass("d-block");
        } else {
            if($("#inputesbnpin").val() === "123456"){
                $("#inputesbnpin").removeClass("border-error");
                $("#req_esbnpin").removeClass("d-block");
                $("#req_esbnpin").addClass("d-none");
                this.setState({next3: true});
            } else {
                $("#inputesbnpin").removeClass("border-error");
                $("#req_esbnpin").removeClass("d-block");
                $("#req_esbnpin").addClass("d-none");
                this.setState({next3: false});
            }
        }
    };

    closeClickRedeem = (e) => {
        this.refs.frameAction.closeModal(100);
    }

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
                <div id="alert-declareredeem" className={"col-sm-2 text-center fade-out f-12"} style={{ position : "absolute", zIndex : 1, background: "brown", bottom: "35px", left: "35px" }}>
                    <div className={/*{cssmode == 'night'? */"px-2 pt-2 text-right text-white" /*: "px-2 pt-2 text-right text-black"*/}><i className="click-pointer icofont icofont-close" onClick={this.onClickCloseAlertDeclareRedeem}></i></div>
                    <div id="content-alertdeclareredeem" className={"px-2 py-4 text-white"}></div>
                </div>
                <AppFrameAction ref="frameAction" />
                <div className="text-white f-12 container-fluid">
                    <div className="col align-self-center py-5">
                        <div className="step-tab">
                            <div id="crumbs">
                                <ul className="nav nav-pills">
                                    <li className={step1+' '+activeTab1} onClick={() => (toggle1=="tab")?this.setState({activeTab:1}):""}><a href={(toggle1=="tab")? "#redeem1" : ""} className={tab1} data-toggle={toggle1}>Form</a></li>
                                    <li className={activeTab2} onClick={() => (toggle2=="tab")?this.setState({activeTab:4}):""}>{(toggle2=="tab")? <a href="#redeem2" className={tab2} data-toggle={toggle2}>Confirmation</a> : <a className={tab2 + "click-pointer"} data-toggle={toggle2}>Confirmation</a>}</li>
                                    <li className={stepLast+' '+activeTab3} onClick={() => (toggle3=="tab")?this.setState({activeTab:5}):""}>{(toggle3=="tab")? <a href="#redeem3" className={tab3} data-toggle={toggle3}>Finish</a> : <a className={tab3 + "click-pointer"} data-toggle={toggle3}>Finish</a>}</li>
                                </ul>
                            </div>
                        </div>
                        <div></div>
                        <div className="tab-content clearfix" >
                            <div className="tab-pane active" id="redeem1">
                                <div className="container content-step">
                                    <div className="row">
                                        <div id="sbncoderedeem" className="col-sm-12 py-3" style={{ borderRadius:'0 10px 0 0', color: 'white', backgroundColor: '#080808', marginBottom: '2px', border: '.5px #ffffff30 solid' }}>SBNCODE</div>
                                        <div className="col-sm-12 py-2 px-0">
                                            <table width="100%" className={"table table-bordered table-responsive mb-0 card-334"}>
                                                <tr>
                                                    <td className={"d-border text-right"}>SID No :</td>
                                                    <td width="50%" className={"even-td d-border hover-tables"} >IDD13823223984</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>Customer Name :</td>
                                                    <td width="50%" className={"d-border hover-tables"}>FATCHUL NIMAH</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>Account Name :</td>
                                                    <td width="50%" className={"even-td d-border hover-tables"}>FATCHUL NIMAH</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>Account No :</td>
                                                    <td width="50%" className={"d-border hover-tables"} >234523423432</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>Bank Account :</td>
                                                    <td width="50%" className={"even-td d-border hover-tables"}>BCA</td>

                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>SB Account No :</td>
                                                    <td width="50%" className={"d-border hover-tables"}>DX921000021212143</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>Coupon Rate :</td>
                                                    <td width="50%" className={"even-td d-border hover-tables"}>6.00%</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>Order Code :</td>
                                                    <td width="50%" className={"d-border hover-tables"}>OR3232338</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>Denomination (IDR) :</td>
                                                    <td width="50%" className={"even-td d-border hover-tables"}>1.000.000</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>Portfolio Balance (IDR) :</td>
                                                    <td width="50%" className={"d-border hover-tables"}>4.000.000</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>Allowable Redemption (IDR) :</td>
                                                    <td width="50%" className={"even-td d-border hover-tables"}>2.000.000</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>Redeem Amount (IDR)* :</td>
                                                    <td width="50%" className={"d-border hover-tables"}>
                                                        <Input
                                                               disabled={this.state.checkform ? true : false}
                                                               id="inputesbnredeem"
                                                               type="number"
                                                               placeholder='Redeem Amount (IDR)'
                                                               onChange={() => {
                                                                   if($("#inputesbnredeem").val() === ""){
                                                                       this.setState({next2: false});
                                                                       $("#inputesbnredeem").addClass("border-error");
                                                                       $("#req_redeemamount").removeClass("d-none");
                                                                       $("#req_redeemamount").addClass("d-block");
                                                                   } else {
                                                                       $("#inputesbnredeem").removeClass("border-error");
                                                                       $("#req_redeemamount").removeClass("d-block");
                                                                       $("#req_redeemamount").addClass("d-none");
                                                                       this.setState({next2: true, inputamountredeem:$("#inputesbnredeem").val()});
                                                                   }
                                                               }}
                                                               className="col-sm-12 pl-4 pr-0 text-right align-self-center input-right"/>
                                                        <small className="pl-4 text-danger d-none" id="req_redeemamount">Required</small>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="col-sm-12 py-3">
                                            <input disabled={this.state.checkform ? true : false} className="magic-checkbox" type="checkbox" name="declareredeem"
                                                   id="declareredeem" value="option" onChange={() => {
                                                if($("#declareredeem").prop("checked") == true){
                                                    if($("#inputesbnredeem").val() === ""){
                                                        this.setState({nextcheck2 : true});
                                                    } else {
                                                        this.setState({nextcheck2 : true, next2:true, inputamountredeem:$("#inputesbnredeem").val()});
                                                    }
                                                    this.clickRedeemAlert();
                                                } else {
                                                    this.setState({nextcheck2 : false});
                                                }
                                            }}/>
                                            <label htmlFor="declareredeem"
                                                   className="text-white f-12-center">
                                                I declare that I have submitted the Redemption Data correctly and completely
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="container next-btn">
                                    <a className="btn btn-primary pull-right" href={this.state.next2 && this.state.nextcheck2 ? "#redeem2" : "#"} data-toggle="tab" onClick={() => {
                                        if($("#inputesbnredeem").val() === ""){
                                            $("#inputesbnredeem").addClass("border-error");
                                            $("#req_redeemamount").removeClass("d-none");
                                            $("#req_redeemamount").addClass("d-block");
                                            this.setState({next2: false});
                                        } else {
                                            if($("#declareredeem").prop("checked") == true){
                                                $("#inputesbnredeem").removeClass("border-error");
                                                $("#req_redeemamount").removeClass("d-block");
                                                $("#req_redeemamount").addClass("d-none");
                                                this.setState({active2: true, activeTab: 2, next2: true, nextcheck2 : true, checkform : true});
                                            } else {
                                                $("#content-alertdeclareredeem").text("Please Check Declare ");
                                                $("#alert-declareredeem").removeClass("fade-out");
                                                $("#alert-declareredeem").addClass("fade-in");
                                                this.setState({next2: false, nextcheck2 : false});
                                            }
                                        }
                                    }}>Next</a>
                                </div>
                            </div>

                            <div className="tab-pane" id="redeem2">
                                <div className="container content-step">
                                    <div className="row">
                                        <div id="sbncoderedeem2" className="col-sm-12 py-3" style={{ borderRadius:'0 10px 0 0', color: 'white', backgroundColor: '#080808', marginBottom: '2px', border: '.5px #ffffff30 solid' }}>SBNCODE</div>
                                        <div className="col-sm-12 py-2 px-0">
                                            <table width="100%" className={"table table-bordered table-responsive mb-0 card-334"}>
                                                <tr>
                                                    <td className={"d-border text-right"}>SID No :</td>
                                                    <td width="50%" className={"even-td d-border hover-tables"} >IDD13823223984</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>Customer Name :</td>
                                                    <td width="50%" className={"d-border hover-tables"}>FATCHUL NIMAH</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>Account Name :</td>
                                                    <td width="50%" className={"even-td d-border hover-tables"}>FATCHUL NIMAH</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>Account No :</td>
                                                    <td width="50%" className={"d-border hover-tables"} >234523423432</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>Bank Account :</td>
                                                    <td width="50%" className={"even-td d-border hover-tables"}>BCA</td>

                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>SB Account No :</td>
                                                    <td width="50%" className={"d-border hover-tables"}>DX921000021212143</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>Coupon Rate :</td>
                                                    <td width="50%" className={"even-td d-border hover-tables"}>6.00%</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>Order Code :</td>
                                                    <td width="50%" className={"d-border hover-tables"}>OR3232338</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>Denomination (IDR) :</td>
                                                    <td width="50%" className={"even-td d-border hover-tables"}>1.000.000</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>Portfolio Balance (IDR) :</td>
                                                    <td width="50%" className={"d-border hover-tables"}>4.000.000</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>Allowable Redemption (IDR) :</td>
                                                    <td width="50%" className={"even-td d-border hover-tables"}>2.000.000</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>Redeem Amount (IDR) :</td>
                                                    <td width="50%" className={"d-border hover-tables"}>{this.state.inputamountredeem}</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>Enter Your PIN* :</td>
                                                    <td width="50%" className={"d-border hover-tables"}>
                                                        <Input
                                                            disabled={this.state.checkconfirmation ? true : false}
                                                            value={this.state.form.message}
                                                            maxLength="6"
                                                            id="inputesbnpin"
                                                            type="password"
                                                            placeholder='Enter Your PIN'
                                                            onChange={this.handleChangeInput}
                                                            className="col-sm-12 pl-4 pr-0 text-right align-self-center input-right"/>
                                                        <small className="pl-4 text-danger d-none" id="req_esbnpin">Required</small>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="container next-btn">
                                    <a className="btn btn-primary pull-right" href={this.state.next3 ? "#redeem3" : "#"} data-toggle="tab" onClick={() => {
                                        if($("#inputesbnpin").val() === ""){
                                            $("#inputesbnpin").addClass("border-error");
                                            $("#req_esbnpin").removeClass("d-none");
                                            $("#req_esbnpin").addClass("d-block");
                                            this.setState({next3: false});
                                        } else {
                                            if($("#inputesbnpin").val() === "123456"){
                                                $("#inputesbnpin").removeClass("border-error");
                                                $("#req_esbnpin").removeClass("d-block");
                                                $("#req_esbnpin").addClass("d-none");
                                                this.setState({active3:true,activeTab:3, next3: true, checkconfirmation : true});
                                            } else {
                                                $("#inputesbnpin").removeClass("border-error");
                                                $("#req_esbnpin").removeClass("d-block");
                                                $("#req_esbnpin").addClass("d-none");
                                                this.setState({next3: false, form:{message:''}});
                                                this.clickPinAlert();
                                            }
                                        }
                                    }}>Next</a>
                                </div>
                            </div>

                            <div className="tab-pane" id="redeem3">
                                <div className="container content-step">
                                    <div className="row">
                                        <div id="sbncoderedeem3" className="col-sm-12 py-3" style={{ borderRadius:'0 10px 0 0', color: 'white', backgroundColor: '#080808', marginBottom: '2px', border: '.5px #ffffff30 solid' }}>SBNCODE</div>
                                        <div className="col-sm-12 py-2 px-0">
                                            <table width="100%" className={"table table-bordered table-responsive mb-0 card-169"}>
                                                <tr>
                                                    <td className={"d-border text-right"}>Redeem Amount (IDR) :</td>
                                                    <td width="50%" className={"even-td d-border hover-tables"} >{this.state.inputamountredeem}</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>Redemption Code :</td>
                                                    <td width="50%" className={"d-border hover-tables"}>ABC323423431</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>Destination Account No :</td>
                                                    <td width="50%" className={"even-td d-border hover-tables"}>234523423432</td>
                                                </tr>
                                                <tr>
                                                    <td className={"d-border text-right"}>Bank Account :</td>
                                                    <td width="50%" className={"d-border hover-tables"} >BCA</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                    <div className={"row bg-gray-tradding py-3"}>
                                        <div className="col-sm-12 px-0">

                                            <div className="tab-content clearfix">
                                                <div className="tab-pane active py-2" id="4b">
                                                    <div className={"col-sm-12 mt-4 card-169"}>
                                                        <div className={"text-center col-sm-12 bg-success py-5"}>
                                                            <i className="text-white">Early Redemption Successfully</i>
                                                        </div>
                                                        <div className={"col-sm-12 text-right mb-0 px-3 h-40 py-5"}>
                                                            <button onClick={this.closeClickRedeem} className={"btn btn-primary pull-right"}>Finish</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*<div className="container next-btn">
                                    <button className="btn btn-primary pull-right" onClick={this.closeClickRedeem}>Finish</button>
                                </div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

class ModalAlertRedeem extends React.Component {
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
                            Orders that have been submitted cannot be changed/cancelled.
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

const RedeemEsbnModal = ContextConnector(BIPSAppContext,
    (vars, actions) => ({
        thememode: vars.thememode,
        signupState: vars.signupState,
        isSignup : (signupState)=> {actions.sendAction('isSignup', {signupState})},
    }),
)(RedeemEsbnModal_Base);

export default RedeemEsbnModal;
