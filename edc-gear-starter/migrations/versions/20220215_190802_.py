"""empty message

Revision ID: 4d31c198bf17
Revises: 6b6155fd2eef
Create Date: 2022-02-15 19:08:02.198026

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4d31c198bf17'
down_revision = '6b6155fd2eef'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('likes', 'post_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    op.alter_column('likes', 'comment_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('likes', 'comment_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    op.alter_column('likes', 'post_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    # ### end Alembic commands ###
