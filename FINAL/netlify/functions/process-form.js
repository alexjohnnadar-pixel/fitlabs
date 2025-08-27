// Netlify serverless function to process form submissions
exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Parse the form data
    const formData = JSON.parse(event.body);
    
    // Here you can:
    // 1. Save to a database
    // 2. Send email notifications
    // 3. Integrate with other services
    // 4. Validate data more thoroughly
    
    console.log('Form data received:', formData);
    
    // For now, we'll just log and return success
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        message: 'Form submitted successfully',
        data: formData 
      })
    };
  } catch (error) {
    console.error('Error processing form:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to process form data' })
    };
  }
};