"""empty message

Revision ID: 270f96afcf05
Revises: 621817ab6bb0
Create Date: 2022-02-15 15:21:08.541650

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

import os
environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")

# revision identifiers, used by Alembic.
revision = '270f96afcf05'
down_revision = '621817ab6bb0'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('followers')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('followers',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('user_id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('follower_id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('created_at', postgresql.TIMESTAMP(timezone=True), server_default=sa.text('now()'), autoincrement=False, nullable=False),
    sa.Column('updated_at', postgresql.TIMESTAMP(timezone=True), server_default=sa.text('now()'), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['follower_id'], ['users.id'], name='followers_follower_id_fkey'),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name='followers_user_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='followers_pkey')
    )
    # ### end Alembic commands ###
    if environment == "production":
        op.execute(f"ALTER TABLE followers SET SCHEMA {SCHEMA};")
 
