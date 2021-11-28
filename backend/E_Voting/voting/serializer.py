from .models import Election, Positions
from rest_framework import serializers
from django.contrib.auth import authenticate


# Election Serializer
class ElectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Election
        fields = ('election_generated_id', 'election_name', 'election_start', 'election_end', 'election_duration')

# Position Serializer
class PositionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Positions
        fields = ('election_position_name','election_position_id','position_election')