
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const MacAddressExplanation: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            MAC Address: The Digital Identity Card
          </h1>
          <p className="text-xl text-blue-700 max-w-2xl mx-auto">
            Discover the unique identifier that powers network communication
          </p>
        </header>

        <Separator className="my-6" />

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-800">What is a MAC Address?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                A MAC (Media Access Control) address is a unique hardware identifier assigned to network interfaces, acting like a digital fingerprint for devices.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-blue-800">Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Typically 48 bits long (6 bytes), written as six groups of two hexadecimal digits, separated by colons or hyphens.
              </p>
              <code className="block mt-2 bg-gray-100 p-2 rounded text-blue-600">
                00:1A:2B:3C:4D:5E
              </code>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-blue-800">How MAC Addresses Work</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 text-gray-700 list-disc list-inside">
              <li>Uniquely identifies network hardware at the lowest network level</li>
              <li>Used in Ethernet, Wi-Fi, and other network communications</li>
              <li>Helps route data packets to the correct device on a local network</li>
            </ul>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-800">Manufacturer Identification</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                The first three octets (OUI - Organizationally Unique Identifier) represent the manufacturer of the network interface.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-blue-800">Unique Traits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>Globally unique</li>
                <li>Hardcoded into network hardware</li>
                <li>Cannot be changed (with some exceptions)</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <button 
            onClick={() => setShowDetails(!showDetails)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            {showDetails ? 'Hide Technical Details' : 'Show More Details'}
          </button>
        </div>

        {showDetails && (
          <Card className="mt-8 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900">Technical Deep Dive</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800 overflow-x-auto">
{`MAC Address Format:
| Manufacturer (OUI) | Unique Serial Number |
       3 bytes           3 bytes

Example Breakdown:
00:1A:2B:3C:4D:5E
└─┬─┘ └─┬─┘ └─┬─┘
  |     |     Network Interface ID
  |     Manufacturer Specific
  Organizationally Unique Identifier (OUI)`}
              </pre>
            </CardContent>
          </Card>
        )}

        <footer className="text-center text-blue-800 mt-8">
          <p>Understanding MAC addresses helps demystify how devices communicate in modern networks.</p>
        </footer>
      </div>
    </div>
  );
};

export default MacAddressExplanation;
