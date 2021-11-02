import React from "react";
class Flightdata extends React.Component{
    // https://jsonmock.doselect.com/api/domestic_flights/domestic_flights

    
    state={
        flightsdata:[],
        }
        
        
        getFlightData = async()=>{
            const response = await fetch('https://jsonmock.doselect.com/api/domestic_flights/domestic_flights');
            const data = await response.json();
            // console.log(data);
            this.setState({flightsdata:data})


        }
        componentDidMount(){
            // Here we can make API call
            this.getFlightData()
        }
    render(){
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>Take Off</th>
                        <th>Landing</th>
                        <th>Duration</th>
                        <th>Departure</th>
                        <th>Arrival</th>
                        <th>Ticket Price</th>
                    
                        </tr>
                        </thead>
                        
                        <tbody>
               {
                this.state.flightsdata.map((flight)=>(
                    <tr>
                        <td>{flight.id}</td>
                        <td>{flight.takeoff_timestamp}</td>
                        <td>{flight.landing_timestamp}</td>
                        <td>{flight.duration}</td>
                        <td>{flight.departure_from}</td>
                        <td>{flight.arrival_at}</td>
                        <td>{flight.flight_ticket_price}</td>
                        

                        </tr>
                ))   
               }
               </tbody>
               </table>
            </div>
        )
    }
}
export default Flightdata;