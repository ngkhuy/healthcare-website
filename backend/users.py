from sqlalchemy.orm import Session
from models import User
import bcrypt

def get_user_by_email(db: Session, email: str):
    return db.query(User).filter(User.email == email).first()

def create_user(db: Session, name: str, email: str, password: str):
    hashed_pw = bcrypt.hashpw(password.encode(), bcrypt.gensalt())
    db_user = User(name=name, email=email, hashed_password=hashed_pw.decode())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user
