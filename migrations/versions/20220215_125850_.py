"""empty message

Revision ID: 7c1f1d156a60
Revises: 6b52f381c34c
Create Date: 2022-02-15 12:58:50.282207

"""
from alembic import op
import sqlalchemy as sa

import os
environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")


# revision identifiers, used by Alembic.
revision = '7c1f1d156a60'
down_revision = '6b52f381c34c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('users', 'image_url',
               existing_type=sa.VARCHAR(length=255),
               nullable=False)
    # ### end Alembic commands ###
    if environment == "production":
        op.execute(f"ALTER TABLE <table_name> SET SCHEMA {SCHEMA};")


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('users', 'image_url',
               existing_type=sa.VARCHAR(length=255),
               nullable=True)
    # ### end Alembic commands ###