# Microsoft Dynamics 365 Business Central API v2.0

This repository contains a comprehensive Postman collection for Microsoft Dynamics 365 Business Central API v2. It provides ready-to-use API requests for testing and integrating with Business Central's REST API.

## 📋 Overview

Microsoft Dynamics 365 Business Central provides REST APIs that allow you to interact with business data programmatically. This collection includes all major API endpoints for managing companies, customers, vendors, items, sales documents, and more.

## 🚀 Quick Start

### Prerequisites

- Microsoft Dynamics 365 Business Central tenant
- Valid authentication credentials (OAuth 2.0 or Basic Authentication)
- Postman application installed
- Node.js 16+ (for JavaScript automation tools)

### Setup Instructions

1. **Clone this repository**
   ```bash
   git clone https://github.com/your-username/business-central-api.git
   cd business-central-api
   ```

2. **Install JavaScript Dependencies (Optional)**
   ```bash
   npm install
   ```

3. **Import the Postman Collection**
   - Open Postman
   - Click "Import" button
   - Select `postman/Business_Central_API_v2.0.postman_collection.json`
   - Import the environment file `postman/Business_Central_Environment.postman_environment.json`

4. **Configure Environment Variables**
   - Set your `baseUrl` (e.g., `https://api.businesscentral.dynamics.com/v2.0/your-tenant-id/your-environment-name`)
   - Configure authentication credentials
   - Set company ID if needed

## 🔗 Base URLs

- **Production**: `https://api.businesscentral.dynamics.com/v2.0/{tenant-id}/{environment-name}/api/v2.0`
- **Sandbox**: `https://api.businesscentral.dynamics.com/v2.0/{tenant-id}/Sandbox/api/v2.0`

## 📖 Documentation

- [Official Microsoft Documentation](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/api-reference/v2.0/)
- [Authentication Guide](docs/authentication.md)
- [API Reference](docs/api-reference.md)
- [Error Handling](docs/error-handling.md)

## ⚠️ Error Handling

Common HTTP status codes:
- `200 OK` - Successful request
- `201 Created` - Resource created successfully
- `400 Bad Request` - Invalid request format
- `401 Unauthorized` - Authentication required
- `403 Forbidden` - Insufficient permissions
- `404 Not Found` - Resource not found
- `500 Internal Server Error` - Server error

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- [Business Central Community](https://community.dynamics.com/business/)
- [Microsoft Documentation](https://learn.microsoft.com/en-us/dynamics365/business-central/)
- [Report Issues](https://github.com/your-username/business-central-api/issues)

---

**Note**: Replace `{tenant-id}`, `{environment-name}`, and `{company-id}` with your actual values.
