import { gql } from "@apollo/client";

export const xenditPayment = gql`
  mutation CreateInvoice($transactionId: ID!, $accessToken: String, $price: Int) {
    createInvoice(transactionId: $transactionId, access_token: $accessToken, price: $price) {
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

export const getLatestTransaction = gql`
  query Query($accessToken: String) {
    latestUserTransactions(access_token: $accessToken) {
      id
      hotelId
      price
      status
      mainImg
      bookDateStart
      bookDateEnd
      customerId
      createdAt
      updatedAt
      hotelCity
      hotelName
    }
  }
`;

export const createBooking = gql`
  mutation Mutation(
    $customerId: ID!
    $hotelApiId: ID!
    $bookingDate: String!
    $name: String
    $role: String
    $accessToken: String
  ) {
    bookingBallroom(
      customerId: $customerId
      hotelApiId: $hotelApiId
      bookingDate: $bookingDate
      name: $name
      role: $role
      access_token: $accessToken
    )
  }
`;

export const createCustomer = gql`
  mutation RegisterCustomer(
    $imageUrl: String
    $email: String
    $username: String
    $password: String
    $phoneNumber: String
    $address: String
  ) {
    registerCustomer(
      imageUrl: $imageUrl
      email: $email
      username: $username
      password: $password
      phoneNumber: $phoneNumber
      address: $address
    )
  }
`;

export const loginCustomer = gql`
  mutation Mutation($email: String, $password: String) {
    loginUser(email: $email, password: $password) {
      msg
      token
      id
      email
      role
      username
      imageUrl
    }
  }
`;
