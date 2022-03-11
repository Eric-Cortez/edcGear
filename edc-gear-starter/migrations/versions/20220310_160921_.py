"""empty message

Revision ID: ff6ee005dd7c
Revises: 47e76a3eac37
Create Date: 2022-03-10 16:09:21.418085

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = 'ff6ee005dd7c'
down_revision = '47e76a3eac37'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('images')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('images',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('url', sa.VARCHAR(), autoincrement=False, nullable=False),
    sa.Column('user_id', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('post_id', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('time_created', postgresql.TIMESTAMP(timezone=True), server_default=sa.text('now()'), autoincrement=False, nullable=True),
    sa.Column('time_updated', postgresql.TIMESTAMP(timezone=True), server_default=sa.text('now()'), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['post_id'], ['posts.id'], name='images_post_id_fkey'),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name='images_user_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='images_pkey')
    )
    # ### end Alembic commands ###
