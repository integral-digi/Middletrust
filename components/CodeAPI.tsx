import { CodeSnippet } from "./Codebox";

export const codeNode = () => (
    <pre>
      {`
    const fetch = require('node-fetch');
    
    // Set up the Middletrust API endpoint
    const mtEndpoint = 'https://sandbox.middletrust.co';
    // Set up your Middletrust API credentials
    const apiKey = '<your-api-key>';
    const apiSecret = '<your-api-secret>';
    // Create an escrow agreement
    function createEscrowAgreement() {
        const requestBody = {
            seller: {
                name: 'John Smith',
                email: 'john.smith@example.co'
            },
            buyer: {
                name: 'Jane Doe',
                email: 'jane.doe@example.co'
            },
            amount: 500.00,
            currency: 'NGN'
        };
    }
      `}
    </pre>
  );
  

export const codePython = () =>  (
    <pre>
      {`
    import requests

    # Set up the Middletrust API endpoint
    mt_endpoint = 'https://sandbox.middletrust.co'
    # Set up your Middletrust API credentials
    api_key = '<your-api-key>'
    api_secret = '<your-api-secret>'
    # Create an escrow agreement
    def create_escrow_agreement():
        request_body = {
            'seller': {
                'name': 'John Smith',
                'email': 'john.smith@example.co'
            },
            'buyer': {
                'name': 'Jane Doe',
                'email': 'jane.doe@example.co'
            },
            'amount': 500.00,
            'currency': 'NGN'
        };
    }
     `}
    </pre>
);

export const codePHP = () => (
    <pre>
        {`
    <?php
    // Set up the Middletrust API endpoint
    $mtEndpoint = 'https://sandbox.middletrust.co';

    // Set up your Middletrust API credentials
    $apiKey = '<your-api-key>';
    $apiSecret = '<your-api-secret>';
    // Create an escrow agreement
    function createEscrowAgreement() {
        global $mtEndpoint, $apiKey, $apiSecret;

        $requestBody = [
            'seller' => [
                'name' => 'John Smith',
                'email' => 'john.smith@example.co'
            ],
            'buyer' => [
                'name' => 'Jane Doe',
                'email' => 'jane.doe@example.co'
            ],
            'amount' => 500.00,
            'currency' => 'NGN'
        ]; //...
    ?>
    `}
    </pre>
);
export const codeGolang = () => (
    <pre>
    {`
    // Set up the Middletrust API endpoint
    const mtEndpoint = "https://sandbox.middletrust.co"

    // Set up your Middletrust API credentials
    const apiKey = "<your-api-key>"
    const apiSecret = "<your-api-secret>"

    // Create an escrow agreement
    func createEscrowAgreement() {
        requestBody := map[string]interface{}{
            "seller": map[string]interface{}{
                "name":  "John Smith",
                "email": "john.smith@example.co",
            },
            "buyer": map[string]interface{}{
                "name":  "Jane Doe",
                "email": "jane.doe@example.co",
            },
            "amount":   500.00,
            "currency": "NGN",
        }
    }
`}
</pre>
);

export const codeJava = () =>  (
    <pre>
        {`
        public class MiddletrustEscrow {

            // Set up the Middletrust API endpoint
            private static final String mtEndpoint = "https://sandbox.middletrust.co";

            // Set up your Middletrust API credentials
            private static final String apiKey = "<your-api-key>";
            private static final String apiSecret = "<your-api-secret>";

            public static void main(String[] args) {
                createEscrowAgreement();
            }

            // Create an escrow agreement
            public static void createEscrowAgreement() {
                try {
                    // Create the request body as a JSON string
                    String requestBody = "{" +
                            "\"seller\": {" +
                            "\"name\": \"John Smith\"," +
                            "\"email\": \"john.smith@example.co\"" +
                            "}," +
                            "\"buyer\": {" +
                            "\"name\": \"Jane Doe\"," +
                            "\"email\": \"jane.doe@example.co\"" +
                            "}," +
                            "\"amount\": 500.00," +
                            "\"currency\": \"NGN\"" +
                            "}";

                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        `}
    </pre>
);