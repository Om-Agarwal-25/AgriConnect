import express from "express";

const router = express.Router();

// Simple chatbot responses (can be enhanced with actual AI integration)
router.post("/message", async (req, res) => {
  try {
    const { message, user_id } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message is required" });
    }

    // Simple keyword-based responses
    const lowerMessage = message.toLowerCase();
    let botResponse = "";

    // Farming advice
    if (
      lowerMessage.includes("crop") ||
      lowerMessage.includes("recommendation")
    ) {
      botResponse = `🌾 For crop recommendations, I analyze your soil parameters, climate, and resources. You can use the Crop Recommendation feature from the dashboard for detailed analysis with our XGBoost model. What specific information do you need?`;
    }
    // Disease detection
    else if (
      lowerMessage.includes("disease") ||
      lowerMessage.includes("pest") ||
      lowerMessage.includes("leaf")
    ) {
      botResponse = `🔬 Upload a clear image of the affected plant using the camera button below. Our ResNet AI model will analyze it and provide disease detection results with treatment recommendations. You can also use the Disease Detection feature from the main dashboard.`;
    }
    // Market prices
    else if (
      lowerMessage.includes("price") ||
      lowerMessage.includes("market") ||
      lowerMessage.includes("rate")
    ) {
      botResponse = `💰 Today's market prices:\n🌾 Wheat: ₹25-28/kg\n🍅 Tomatoes: ₹40-45/kg\n🧅 Onions: ₹35-38/kg\n🥔 Potatoes: ₹20-25/kg\n🌽 Maize: ₹18-22/kg\n\nPrices vary by location and quality. Check the Market Prices section for live updates.`;
    }
    // Weather
    else if (
      lowerMessage.includes("weather") ||
      lowerMessage.includes("rain") ||
      lowerMessage.includes("temperature")
    ) {
      botResponse = `🌤️ Current weather conditions:\n• Temperature: 28°C\n• Humidity: 65%\n• Wind: 12 km/h\n• Forecast: Partly cloudy, no rain expected for 3 days\n\nGood conditions for spraying pesticides. Avoid watering during midday heat.`;
    }
    // Government schemes
    else if (
      lowerMessage.includes("scheme") ||
      lowerMessage.includes("pm-kisan") ||
      lowerMessage.includes("pmkisan") ||
      lowerMessage.includes("subsidy")
    ) {
      botResponse = `📋 Popular Government Schemes:\n\n1. **PM-KISAN**: ₹6,000/year direct benefit transfer\n2. **Kisan Credit Card**: Easy loans at 4% interest\n3. **Soil Health Card**: Free soil testing\n4. **PM Fasal Bima Yojana**: Crop insurance\n\nVisit the Government Schemes section in the app for detailed information and application links.`;
    }
    // Fertilizer
    else if (
      lowerMessage.includes("fertilizer") ||
      lowerMessage.includes("urea") ||
      lowerMessage.includes("npk")
    ) {
      botResponse = `🧪 Fertilizer recommendations depend on your soil test results. Generally:\n\n• **NPK Ratio**: 10:26:26 for most crops\n• **Urea**: 50kg/acre during vegetative stage\n• **Organic**: Compost 2-3 tons/acre\n\nFor precise recommendations, please provide your soil test results or use the Crop Recommendation feature.`;
    }
    // Soil analysis
    else if (
      lowerMessage.includes("soil") ||
      lowerMessage.includes("ph") ||
      lowerMessage.includes("nitrogen")
    ) {
      botResponse = `🌱 For soil analysis, please provide these parameters:\n\n**Required:**\n• pH level (6-8)\n• Nitrogen (N) in kg/ha\n• Phosphorous (P) in kg/ha\n• Potassium (K) in kg/ha\n\n**Optional:**\n• Temperature (°C)\n• Humidity (%)\n• Rainfall (mm)\n\nExample: "pH=6.5, N=50, P=35, K=40"`;
    }
    // Irrigation
    else if (
      lowerMessage.includes("water") ||
      lowerMessage.includes("irrigation") ||
      lowerMessage.includes("drip")
    ) {
      botResponse = `💧 Irrigation tips:\n\n• **Drip irrigation**: Saves 50-60% water\n• **Best timing**: Early morning or evening\n• **Frequency**: Depends on crop and season\n• **Amount**: 1-2 inches per week for most crops\n\nProper irrigation improves yield by 40-50%. Consider soil moisture sensors for precision.`;
    }
    // Greeting
    else if (
      lowerMessage.includes("hello") ||
      lowerMessage.includes("hi") ||
      lowerMessage.includes("hey") ||
      lowerMessage.includes("namaste")
    ) {
      botResponse = `🙏 Hello! I'm your AgriConnect AI Assistant. I can help you with:\n\n✅ Crop recommendations\n✅ Disease detection\n✅ Market prices\n✅ Weather updates\n✅ Government schemes\n✅ Farming advice\n\nHow can I assist you today?`;
    }
    // Thanks
    else if (
      lowerMessage.includes("thank") ||
      lowerMessage.includes("thanks")
    ) {
      botResponse = `😊 You're welcome! Feel free to ask if you have more questions. Happy farming! 🌾`;
    }
    // Default response
    else {
      botResponse = `I understand you're asking about "${message}". I can help you with:\n\n🌾 Crop recommendations\n🔬 Disease detection\n💰 Market prices\n🌤️ Weather updates\n📋 Government schemes\n💧 Irrigation advice\n\nCould you please be more specific about what you'd like to know?`;
    }

    res.json({
      bot_response: botResponse,
      user_message: message,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Chatbot error:", error);
    res.status(500).json({
      error: "Failed to process chatbot message",
      bot_response:
        "I apologize, but I encountered an error. Please try again or contact support if the issue persists.",
    });
  }
});

export default router;
