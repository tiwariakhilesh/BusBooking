import React from 'react';
import PropTypes from 'prop-types';
import  './index.scss';
import { Grid, Row } from 'react-bootstrap';
import {Accordion,AccordionItem,AccordionItemTitle,AccordionItemBody,} from 'react-accessible-accordion';

class Faq extends React.Component {
  render() {
    return(
      <Grid>
        <Row><h3 style={{paddingBottom:"20px"}}>Frequently Asked Questions</h3>
           <Accordion>
                <AccordionItem>
                    <AccordionItemTitle>
                        <h3 className="u-position-relative">Online Booking Related<div className="accordion__arrow" role="presentation"/></h3>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                         <strong>How do I buy a ticket on digitalbihar.com ?</strong>
                         <p>You can book the tickets online which is a very simple three step process. We advise you to book your tickets at least two hours before scheduled departure. After you purchase your ticket you will receive an email confirmation that also serves as your boarding pass for most of the bus operators. We don't oversell our schedules, so this boarding pass will guarantee you a seat on your ticketed schedule.</p>
                         <strong>What happens when my schedule/service is cancelled?</strong>
                         <p>We'll make every effort to ensure that your travel is not affected by providing alternate services to help you reach the destination. </p>
                         <strong>How does your boarding process work?</strong>
                         <p>Please arrive at the pick-up point a minimum of 15 minutes before departure. Please have your SMS confirmation (or ticket printout in some cases) and government issues personal identification ready while boarding.</p>
                         <strong>Why are different seats priced differently in the same bus?</strong>
                         <p> There is more than one reason for this: </p>
                         <ol><li> Some Operators/buses have AC/Non-AC in the same bus.</li>
                         <li> Some buses have Seater and Sleeper type seats in the same bus.</li>
                         <li> Some Operators want to price the front rows a little higher than the back rows in the bus</li>
                         </ol>
                        <strong>I’ve lost my ticket printout. What do I do now?</strong>
                        <p>A copy of the ticket would have been sent to you by e-mail when you booked the ticket. Please take a printout of that mail and produce it at the time of boarding. If you have not received your ticket to the e-mail id you provided, you can take a printout on digitalbihar.com website by entering the PNR Number that was sent you by SMS while booking the ticket.</p>
                         <strong>Why is it mandatory to provide my mobile number during booking the ticket(s)?</strong>
                         <p>You must fill in the field "Mobile Number" when booking tickets. Your mobile number will be used to send Booking confirmation SMS, Boarding point details, bus operator will be able to contact you quickly in case you are not on time at the boarding point or Digitalbihar will be able to contact you if there is any change in schedule. </p>
                        <strong>I have not received the tickets to my email id, what do I do?</strong>
                        <p>If you did not receive an email after your conformation of the booking, there can be two reasons: The electronic credit card or debit payment has failed. In this case the purchase is cancelled by the system. You have entered an incorrect e-mail address. The email ticket has ended up in spam folder. Please check your bank statement first to see if your account/card was charged, please contact us in order to solve this problem. If your account was not charged, then you can retry the booking. If you have any further questions, please feel free to call our 24/7 customer support.</p>
                        <strong>I did not receive my SMS Ticket confirmation on mobile. Can you re-send it?</strong>
                        <p>Yes. Please contact our 24/7 customer support and we will be able to re-send you the SMS ticket confirmation with PNR details.</p>
                        <strong>Is it mandatory to carry the required identity proofs along with the e-ticket?</strong>
                        <p>Yes. It is mandatory to carry government issued identity proofs along with your e-ticket.</p>
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <h3 className="u-position-relative">Cancellation Related<div className="accordion__arrow" role="presentation"/></h3>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                     <strong>Can I cancel my ticket online?</strong>
                     <p> Most of the tickets can be cancelled online. However, there are some tickets that can only be cancelled through our call center. <br/> <br/> </p>
                     <p>However please note that the cancellation fee and cancellation period may differ for specific bus services. Please contact any of our executives for cancellation details on any specific service.<br/></p>
                     <strong> How can I cancel my bus ticket online. if I need to?</strong>
                     <p>You need to click on the cancellation link provided on our home page. Enter your ticket number and the e-mail ID that was provided at the time of booking and click on cancel ticket.</p>
                     <strong>Can I partially cancel my ticket?</strong>
                     <p>Partial Ticket Cancellation is accepted by few operators. Please check the cancellation terms of the bus operator provided while booking the ticket. Partial Cancellation of ticket is currently allowed through our portal. Please visit http://www.digitalbihar.com to cancel your tickets.</p>
                     </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                       <h3 className="u-position-relative">Ticket related<div className="accordion__arrow" role="presentation"/></h3>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <strong>Is it mandatory to take a printout of the ticket?</strong>
                        <p> It depends on the bus operator you have booked your ticket with. Even mTickets are available on digital bihar. For operators that support mTickets, the SMS that is sent to your mobile can be produced at the time of boarding and you will be allowed to travel. </p>
                        <p>For operators that do not support mTickets it is a must to take a printout of the e-ticket and produce it at the time of boarding. The e-ticket is sent to the e-mail ID provided at the time of boarding.</p>
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <h3 className="u-position-relative">Payments Related<div className="accordion__arrow" role="presentation"/></h3>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <strong>What payment options do I have?</strong>
                        <p> The different payment options are </p>
                        <ul>
                            <li>Credit card</li>
                            <li>Debit card</li>
                            <li>Internet banking (Internet enabled online bank account)</li>
                            <li>Wallets </li>
                        </ul>
                        <strong>Can I pay for someone else?</strong>
                        <p>Yes, you can pay/book bus tickets for others. It is not necessary that the payee has to travel. Please make sure you are giving the right details for all passengers and also make sure they carry the Govt. issued ID cards to ensure that there won't be any issues.</p>
                        <strong>Is Phone booking of bus tickets available?</strong>
                        <p>No. You cannot book your bus tickets by phone.</p>
                        <strong>Is Home Delivery / Cash on Delivery of tickets available?</strong>
                        <p>No. We do not have that facility for now. You can either carry the SMS confirmation we send or in some cases you can carry the ticket printout that you can print after booking confirmation.</p>
                        <strong>How fast should I complete the online payment?</strong>
                        <p>Payment for any booking, after selecting the seats has to be completed within 10 minutes. If you don't complete the payment during the 10 minutes after selecting your seats, your order will be annulled/void and the seats will be released for others to book.</p>
                     </AccordionItemBody>
                </AccordionItem>
                
                <AccordionItem>
                    <AccordionItemTitle>
                        <h3 className="u-position-relative">Refunds Related<div className="accordion__arrow" role="presentation"/></h3>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                      <strong> I missed the bus. Do I get a refund?<br/></strong>
                      <p>Digitalbihar provides a 100% refund if the bus is missed due to either digtal bihar or its’ partner company's fault. However, if the bus is missed due to any other reason not directly related to digital bihar no refund is provided. </p>
                      <strong>How can I get a refund in case I cancel my ticket?</strong>
                      <p>Generally all refunds are processed the same day or instantly in most cases. Money is transferred/refunded back to the passenger's credit/debit card/Bank account by the payment gateway within 24 hours. After which depending on the customer’s bank, it takes 3-10 business days to reflect the credit in your account.</p>
                      <strong>Would I get a full refund?</strong>
                      <p>Full refund happens only when there has been an error from Digitalbihar.com’s end or the operators end. In other cases, where the traveler requests for cancellation, partial refund happens. Please check the cancellation terms of the particular bus operator - these are mentioned on the ticket printout/Email. Or please contact our customer support for more details.</p>
                     </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <h3 className="u-position-relative">Operator Related<div className="accordion__arrow" role="presentation"/></h3>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                      <strong>Are there any separate Bus Operator Rules I need to know?</strong>
                      <p>Each Bus Operator has their own rules regarding amount of luggage allowed, available luggage space, extra payments for boxes, etc. Each Bus Operator has its own conditions of refunds - these are displayed to you when you are choosing the Bus during the booking process. Please feel free to call our 24/7 customer support if you need any specific information.</p>
                      <strong>What are the rules on luggage?</strong>
                      <p>Every Bus Operator has their own rules regarding amount of luggage allowed, available luggage space, extra payments for boxes, etc. Please feel free to call our 24/7 customer support if you need any specific information.</p>
                     </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <h3 className="u-position-relative">Other Information<div className="accordion__arrow" role="presentation"/></h3>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                      <strong>What if I have additional questions?</strong>
                      <p>If you have any additional questions, comments or other general customer service inquiries, please email us at support@digitalbihar.com or call us at +918130787891.</p>
                     </AccordionItemBody>
                </AccordionItem>
           </Accordion>
        </Row>
      </Grid>
    );
   }
}

export default Faq;
Faq.contextTypes = {
  router: PropTypes.object
};
