from fastapi import FastAPI

app = FastAPI(title="School Management AI Service", version="1.0.0")

@app.get("/health")
def health_check():
    return {"status": "ok", "service": "ai-service"}

@app.post("/predict")
def predict_risk(data: dict):
    # Dummy mock for future ML code
    return {"message": "Prediction model placeholder"}
