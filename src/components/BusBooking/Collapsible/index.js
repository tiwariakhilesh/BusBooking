import React from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import SelectSeat from '../SelectSeat';
import Cancellation from '../Amenities/Cancellation';
import Review from '../Amenities/Review';
import Amenity from '../Amenities/Amenity';
import BoadingPoint from '../Amenities/BoadingPoint';

const Collapsible = ({
  cancellationPolicy,
  droppingPoints,
  boardingPoints,
  collapseType,
  droppingLocations,
  boardingLocations,
  collapse,
  seatDetails,
  busDetails,
  amenitiesList
}) => (
  <Collapse isOpen={collapse} style={{ width: '100%' }}>
    <Card>
      <CardBody>
        {collapseType === 'seatDetail' && (
          <SelectSeat
            seatDetails={seatDetails}
            busDetails={busDetails}
            droppingPoints={droppingPoints}
            boardingPoints={boardingPoints}
          />
        )}
        {collapseType === 'policyDetail' && (
          <Cancellation cancellationPolicy={cancellationPolicy} />
        )}
        {collapseType === 'boardingDropping' && (
          <BoadingPoint
            droppingLocations={droppingLocations}
            boardingLocations={boardingLocations}
          />
        )}
        {collapseType === 'review' && <Review />}
        {collapseType === 'Amenities' && <Amenity list={amenitiesList} />}
      </CardBody>
    </Card>
  </Collapse>
);

export default Collapsible;
