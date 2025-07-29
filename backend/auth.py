from fastapi import APIRouter, HTTPException, Depends, Form
from sqlalchemy.orm import Session
from database import SessionLocal
from users import get_user_by_email, create_user
import bcrypt

auth_router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@auth_router.post("/signup")
def signup(
    name: str = Form(...),
    email: str = Form(...),
    password: str = Form(...),
    db: Session = Depends(get_db)
):
    if get_user_by_email(db, email):
        raise HTTPException(status_code=400, detail="User already exists")

    create_user(db, name, email, password)
    return {"message": "User registered successfully"}

@auth_router.post("/login")
def login(
    email: str = Form(...),
    password: str = Form(...),
    db: Session = Depends(get_db)
):
    user = get_user_by_email(db, email)
    if not user:
        raise HTTPException(status_code=401, detail="Invalid email or password")

    if not bcrypt.checkpw(password.encode(), user.hashed_password.encode()):
        raise HTTPException(status_code=401, detail="Invalid email or password")

    return {"message": "Login successful", "name": user.name}
