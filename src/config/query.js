import { gql } from "@apollo/client";

export const xenditPayment = gql`
  mutation CreateInvoice($customerId: ID!, $accessToken: String, $price: Int) {
    createInvoice(customerId: $customerId, access_token: $accessToken, price: $price) {
      message
      data {
        external_id
        status
        amount
        payer_email
        invoice_url
      }
    }
  }
`;

export const createBooking = gql`
  mutation BookingBallroom($customerId: ID!, $hotelApiId: ID!, $bookingDate: String!, $name: String, $accessToken: String, $role: String) {
    bookingBallroom(customerId: $customerId, hotelApiId: $hotelApiId, bookingDate: $bookingDate, name: $name, access_token: $accessToken, role: $role)
  }
`;
