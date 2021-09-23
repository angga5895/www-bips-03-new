import React from "react";
import {AppFrameAction} from "../appframe";
import {ContextConnector} from "../appcontext";
import {BIPSAppContext} from "../AppData";
import {Input} from "semantic-ui-react";
import $ from "jquery";
import {WSConnectionAction} from "../appnetwork";
import CustomTooltip from "../app_pages/CustomTooltip";
import {AgGridReact} from "ag-grid-react";


class HistoEsbnModal_Base extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <>
                <AppFrameAction ref="frameAction"/>
                <div className="text-white f-12 container-fluid">
                    <div id="early-show" className="row mb-2">
                        <div id="exTab" className="container-fluid mx-0 col-sm-12" style={{ paddingTop : "10px" }}>
                            <div className="row mb-2">
                                <div className={"col-sm-12 px-0"}>
                                    <ul className="nav nav-pills">
                                        <li>
                                            <a href="#1b" data-toggle="tab">HISTORICAL SUBSCRIPTION</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content clearfix">
                                        <div className="tab-pane active py-2" id="2b">
                                            <div className="col-sm-12 row mx-0 px-0 bg-gray-tradding py-3">
                                                <div className="col-sm-4 row mx-0 px-0">
                                                    <div className="col-sm-12">
                                                        ORDER CODE
                                                    </div>
                                                    <div className="col-sm-12 font-weight-bold">IDR 1.000.000</div>
                                                </div>
                                                <div className="col-sm-4 row mx-0 px-0">
                                                    <div className="col-sm-12">SUBSCRIPTION DATE</div>
                                                    <div className="col-sm-12 font-weight-bold">21 May 2023</div>
                                                </div>
                                                <div className="col-sm-4 row mx-0 px-0">
                                                    <div className="col-sm-12">
                                                        SUBSCRIPTION DATE
                                                    </div>
                                                    <div className="col-sm-12 font-weight-bold">IDR 4.000.000</div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 mx-0 px-0 py-1">
                                                <HistSbnAgGrid/>
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

class HistSbnAgGrid extends React.PureComponent {
    constructor(props) {
        super(props);
        const self = this;
        this.state = {
            columnDefs: [
                { field: "changedate", headerName: "Change Date", sortable: true, filter: "agTextColumnFilter", resizable: true, width:175,
                    cellClass : function (params) {
                        return "text-center grid-table f-12 d-border-aggrid-right";
                    },
                },
                { field: "billingcode", headerName: "Billing Code", sortable: true,
                    filter: "agTextColumnFilter", resizable: true,
                    width: 110, minWidth: 110,
                    cellClass : function (params) {
                        return " grid-table text-center f-12 locked-visible locked-col d-border-aggrid-right";
                    }, suppressSizeToFit: true
                },
                { field: "ntpn", headerName: "NTPN", sortable: true, filter: "agTextColumnFilter", resizable: true, width: 160,
                    cellClass : function (params) {
                        return "text-center grid-table f-12 d-border-aggrid-right";
                    },
                },
                { field: "status", headerName: "Status", sortable: true, filter: "agTextColumnFilter", resizable: true,
                    width: 175,
                    cellClass : function (params) {
                        return "text-center grid-table f-12 d-border-aggrid-right text-capitalize";
                    },
                }
            ],
            defaultColDef: {
                sortable: true,
                filter: true,
                tooltipComponent: 'customTooltip',

            },
            tooltipShowDelay: 0,
            frameworkComponents: {customTooltip: CustomTooltip},
            rowData: [
                {
                    changedate: "11 SEP 2021",
                    billingcode: "349900334244",
                    ntpn: "ACD12334",
                    status: "Completed Order",
                },
                {   changedate: "12 SEP 2021",
                    billingcode: "349900334244",
                    ntpn: "ACD12335",
                    status: "Completed Order",
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
                    className={"card-129 ag-theme-balham-dark ag-bordered ag-header-gray table-bordered ag-striped-odd"}
                    id="myGrid"
                    style={{
                        width: "100%",
                    }}>
                    <AgGridReact
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}
                        defaultColDef={this.state.defaultColDef}
                        onGridReady={this.onGridReady}
                        tooltipShowDelay={this.state.tooltipShowDelay}
                        frameworkComponents={this.state.frameworkComponents}
                        onFirstDataRendered={this.onFirstDataRendered.bind(this)}>
                    </AgGridReact>
                </div>
            </div>
        );
    }
}

const HistoEsbnModal = ContextConnector(BIPSAppContext,
    (vars, actions) => ({
        thememode: vars.thememode,
        signupState: vars.signupState,
        isSignup : (signupState)=> {actions.sendAction('isSignup', {signupState})},
    }),
)(HistoEsbnModal_Base);

export default HistoEsbnModal;
