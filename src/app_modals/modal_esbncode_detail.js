import React from "react";
import {AppFrameAction} from "./../appframe";
import {Table} from "react-bootstrap";
import {AgGridReact} from "ag-grid-react";
import CustomTooltip from "../app_pages/CustomTooltip";

class ModalSbnCodeDetail extends React.PureComponent{
    render() {
        return (
            <>
                <style>{'' +
                'thead.orderdetail th {' +
                '    background-color: var(--warna-header-card)!important;' +
                '}' +
                ''}
                </style>
                <div className="col-sm-12 text-white px-0 mx-0 py-2 f-12">
                    <div className="col-sm-12 row mx-0 px-0 bg-gray-tradding py-2">
                        <div className="col-sm-3">
                            <div className="col-sm-12">ORDER CODE</div>
                            <div className="col-sm-12 font-weight-bold">349900334244</div>
                            <br/>
                            <div className="col-sm-12">BILLING CODE</div>
                            <div className="col-sm-12 font-weight-bold">6934838598484</div>
                        </div>
                        <div className="col-sm-3">
                            <div className="col-sm-12">TOTAL PORTFOLIO AMOUNT</div>
                            <div className="col-sm-12 font-weight-bold">IDR 4.000.000</div>
                            <br/>
                            <div className="col-sm-12">COUPON RATE</div>
                            <div className="col-sm-12 font-weight-bold">5,00%</div>
                        </div>
                        <div className="col-sm-3">
                            <div className="col-sm-12">SETTLEMENT DATE</div>
                            <div className="col-sm-12 font-weight-bold">9-Aug-2021</div>
                            <br/>
                            <div className="col-sm-12">EXPIRATION DATE</div>
                            <div className="col-sm-12 font-weight-bold">1-Feb-2023</div>
                        </div>
                        <div className="col-sm-3">
                            <div className="col-sm-12">EARLY REDEMPTION</div>
                            <div id="early-yes" className="col-sm-12 font-weight-bold"><i className="far fa-check-square"></i></div>
                            <div id="early-no" className="col-sm-12 font-weight-bold"><i className="far fa-window-close"></i></div>
                            <br/>
                            <div className="col-sm-12">FIRST COUPON AMAOUNT</div>
                            <div className="col-sm-12 font-weight-bold">IDR 3.091</div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 text-white px-0 mx-0 py-2">
                    <div className="card bg-grey">
                        <div className="card-body mx-0 px-0 my-0 py-0">
                            <div id="exTab" className="container-fluid mx-0" style={{ paddingTop : "10px" }}>
                                <div className="row mb-2">
                                    <div className={"col-sm-12 px-0"}>
                                        <ul className="nav nav-pills">
                                            <li>
                                                <a href="#1b" data-toggle="tab">HISTORICAL COUPON PAYMENT</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content clearfix">
                                            <div className="tab-pane active py-2" id="1b">
                                                <div className="col-sm-12 row mx-0 px-0 bg-gray-tradding py-3">
                                                    <div className="col-sm-3">
                                                        TOTAL COUPON AMOUNT
                                                    </div>
                                                    <div className="col-sm-3 font-weight-bold">IDR 3.031</div>
                                                </div>
                                                <div className="col-sm-12 mx-0 px-0 py-1">
                                                    <HistCouponPaymentAgGrid/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="early-show" className="row mb-2">
                                    <div className={"col-sm-12 px-0"}>
                                        <ul className="nav nav-pills">
                                            <li>
                                                <a href="#2b" data-toggle="tab">HISTORICAL EARLY REDEMPTION</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content clearfix">
                                            <div className="tab-pane active py-2" id="2b">
                                                <div className="col-sm-12 row mx-0 px-0 bg-gray-tradding py-3">
                                                    <div className="col-sm-4 row mx-0 px-0">
                                                        <div className="col-sm-6">
                                                            TOTAL REDEEM AMOUNT
                                                        </div>
                                                        <div className="col-sm-6 font-weight-bold">IDR 1.000.000</div>
                                                    </div>
                                                    <div className="col-sm-4 row mx-0 px-0">
                                                        <div className="col-sm-6">
                                                            REMAINING REDEEM AMOUNT
                                                        </div>
                                                        <div className="col-sm-6 font-weight-bold">IDR 1.000.000</div>
                                                    </div>
                                                    <div className="col-sm-4 row mx-0 px-0">
                                                        <div className="col-sm-6">
                                                            REMAINING PORTFOLIO AMOUNT
                                                        </div>
                                                        <div className="col-sm-6 font-weight-bold">IDR 4.000.000</div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 mx-0 px-0 py-1">
                                                    <HistEarlyRedemptionAgGrid/>
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

class HistCouponPaymentAgGrid extends React.PureComponent {
    constructor(props) {
        super(props);
        const self = this;
        this.state = {
            columnDefs: [
                { field: "paymentdate", headerName: "Payment Date", sortable: true,
                    filter: "agTextColumnFilter", resizable: true,
                    width: 120, minWidth: 100, lockPosition: true, lockVisible: true,
                    cellClass : function (params) {
                        return " grid-table text-center f-12 locked-visible locked-col d-border-aggrid-right";
                    }, suppressSizeToFit: true
                },
                { field: "couponno", headerName: "Coupon No", sortable: true, filter: "agTextColumnFilter", resizable: true, width: 85,
                    cellClass : function (params) {
                        return "text-center grid-table f-12 d-border-aggrid-right";
                    },
                },
                { field: "couponamount", headerName: "Coupon Amount (IDR)", sortable: true, filter: "agTextColumnFilter", resizable: true, width: 170,
                    cellClass : function (params) {
                        return "text-center grid-table f-12 d-border-aggrid-right";
                    },
                },
                { field: "bankaccountno", headerName: "Bank Account No", sortable: true, filter: "agTextColumnFilter", resizable: true, width:180,
                    cellClass : function (params) {
                        return "text-center grid-table f-12 d-border-aggrid-right";
                    },
                },
                { field: "bankaccountname", headerName: "Bank Account Name", sortable: true, filter: "agTextColumnFilter", resizable: true,
                    width: 190,
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
                { paymentdate: "05 SEP 2021",
                    couponno: "1",
                    couponamount: "3.031",
                    bankaccountno: "9234231234",
                    bankaccountname: "Lailan Nimah",
                },
                { paymentdate: "06 SEP 2021",
                    couponno: "2",
                    couponamount: "3.091",
                    bankaccountno: "9234231234",
                    bankaccountname: "Lailan Nimah",
                }
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

class HistEarlyRedemptionAgGrid extends React.PureComponent {
    constructor(props) {
        super(props);
        const self = this;
        this.state = {
            columnDefs: [
                { field: "ordercode", headerName: "Order Code", sortable: true,
                    filter: "agTextColumnFilter", resizable: true,
                    width: 110, minWidth: 110, lockPosition: true, lockVisible: true,
                    cellClass : function (params) {
                        return " grid-table text-center f-12 locked-visible locked-col d-border-aggrid-right";
                    }, suppressSizeToFit: true
                },
                { field: "earlyredemptiondate", headerName: "Early Redemption Date", sortable: true, filter: "agTextColumnFilter", resizable: true, width: 130,
                    cellClass : function (params) {
                        return "text-center grid-table f-12 d-border-aggrid-right";
                    },
                },
                { field: "redemptioncode", headerName: "Redemption Code", sortable: true, filter: "agTextColumnFilter", resizable: true, width: 160,
                    cellClass : function (params) {
                        return "text-center grid-table f-12 d-border-aggrid-right";
                    },
                },
                { field: "settlementdate", headerName: "Settlement Date", sortable: true, filter: "agTextColumnFilter", resizable: true, width:175,
                    cellClass : function (params) {
                        return "text-center grid-table f-12 d-border-aggrid-right";
                    },
                },
                { field: "redemptionamount", headerName: "Redemption Amount (IDR)", sortable: true, filter: "agTextColumnFilter", resizable: true,
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
                { ordercode: "349900334244",
                    earlyredemptiondate: "10 SEP 2021",
                    redemptioncode: "ACD12334",
                    settlementdate: "11 SEP 2021",
                    redemptionamount: "1.000.000",
                },
                { ordercode: "349900334244",
                    earlyredemptiondate: "11 SEP 2021",
                    redemptioncode: "ACD12335",
                    settlementdate: "12 SEP 2021",
                    redemptionamount: "2.000.000",
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

export default ModalSbnCodeDetail;
