import "./payment.css";
import { Link, useHistory } from "react-router-dom";

function Payment() {
  const history = useHistory();

  function continuePay(){
   
    history.push("/success");

   
  }


  return (
    <div>
      <div class="container">
        <div class="centered title">
          <h1>Welcome to our checkout.</h1>
        </div>
      </div>
      <hr class="featurette-divider"></hr>
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div class="tab-content">
              <div id="stripe" class="tab-pane fade in active">
                <script
                  src="https://js.stripe.com/v2/"
                  type="text/javascript"
                ></script>
                <form
                  accept-charset="UTF-8"
                 
                  class="require-validation"
                  data-cc-on-file="false"
                  data-stripe-publishable-key="pk_bQQaTxnaZlzv4FnnuZ28LFHccVSaj"
                  id="payment-form"
                
                >
                  <div style={{ margin: 0, padding: 0, display: "inline" }}>
                    <input name="utf8" type="hidden" value="✓" />
                    <input name="_method" type="hidden" value="PUT" />
                    <input
                      name="authenticity_token"
                      type="hidden"
                      value="qLZ9cScer7ZxqulsUWazw4x3cSEzv899SP/7ThPCOV8="
                    />
                  </div>
                  <br />
                  <div class="form-row">
                    <div class="form-group required">
                      <div class="error form-group hide">
                        <div class="alert-danger alert">
                          Please correct the errors and try again.
                        </div>
                      </div>
                      <label class="control-label">Name on Card</label>
                      <input class="form-control" size="4" type="text" />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group card required">
                      <label class="control-label">Card Number</label>
                      <input
                        autocomplete="off"
                        class="form-control card-number"
                        size="20"
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group card required">
                      <label class="control-label">Billing Address</label>
                      <input
                        autocomplete="off"
                        class="form-control"
                        size="20"
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group cvc required">
                      <label class="control-label">CVC</label>
                      <input
                        autocomplete="off"
                        class="form-control card-cvc"
                        placeholder="ex. 311"
                        size="4"
                        type="text"
                      />
                    </div>
                    <div class="form-group expiration required">
                      <label class="control-label">Expiration</label>
                      <input
                        class="form-control card-expiry-month"
                        placeholder="MM"
                        size="2"
                        type="text"
                      />
                    </div>
                    <div class="form-group expiration required">
                      <label class="control-label">Year</label>
                      <input
                        class="form-control card-expiry-year"
                        placeholder="YYYY"
                        size="4"
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group">
                      <label class="control-label"></label>

                      <button
                        class="form-control btn btn-primary"
                        type="submit" onClick={continuePay}
                      >
                        {" "}
                        Continue →
                      </button>
                    </div>
                  </div>
                </form>
              </div>
           
              {/* <form action="?" id="paypalForm" method="POST">
                */}
            


               <div id="paypal" class="tab-pane fade">
               <div class="paypalResult"></div>
               <br />
               <input type="hidden" id="action" value="paypal"></input>
               <input
                 type="hidden"
                 id="token"
                 value="token-supersecuretoken123123123"
               ></input>
               <a href="#paypal">
                 <img
                   src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-large.png"
                   alt="paypal"
                   width="100%"
                 />
               </a>
               <br />
               <br />
               <br />
               <button
                 class="form-control btn btn-primary submit-button"
                 type="submit" onClick={continuePay}
               >
                 {" "}
                 Continue →
               </button>
             </div>
             {/* </form> */}
           
            </div>
          
          </div>

        <div class="col-sm-6">
          <label class="control-label"></label>
          <div class="alert alert-info">
            Please choose your method of payment and hit continue. You will then
            be sent down to pay using your selected payment option.
          </div>
          <br />
          <div class="btn-group-vertical btn-block">
            <a
              class="btn btn-default"
              style={{ "text-align": "left" }}
              data-toggle="tab"
              href="#stripe"
            >
              Debit/Credit Card
            </a>
            <a
              class="btn btn-default"
              style={{ "text-align": "left" }}
              data-toggle="tab"
              href="#paypal"
            >
              PayPal
            </a>
            <a
              class="btn btn-default"
              style={{ "text-align": "left" }}
              data-toggle="tab"
              href="#cod"
            >
              Cash on delivery(COD)
            </a>
          </div>
          <br />
          <br />
          <br />

          <div class="jumbotron jumbotron-flat">
            <div class="center">
              <h2>
                <i>BALANCE DUE:</i>
              </h2>
            </div>
            <div class="paymentAmt">₹ 1050</div>
          </div>
          <br />
          <br />
          <br />
        </div>
      </div> </div>
    </div>
  );
}

export default Payment;
